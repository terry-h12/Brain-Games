import { useEffect, useState } from 'react';
import '../App.css';
import { useLocation } from 'react-router-dom';
import Circle from 'react-circle';
import { makeStyles } from '@material-ui/core/styles';
import TitleBar  from "../Components/TitleBar";

interface CircleStats {
  colour: string;
  size: string;
  rate: string;
  goal: number;
}

const useStyles = makeStyles({
  scoreCard: {
    backgroundColor: "white", 
    padding: "10px", 
    position: 'absolute', 
    bottom:"50%", 
    marginLeft: "15px",
    borderRadius: "15px"
  },
  bottom: {
    marginBottom: "5px"
  },
  victory: {
    display: "none",
    fontSize: 24,
    color: "white",
    backgroundColor: "#31BFF3",
    width: "80px",
    margin: "auto",
    padding: "5px",
    borderRadius: "15px"
  },
  menu: {
    backgroundColor: "#F6E683",
    padding: "5px",
    borderRadius: "10px"
  }
});

export default function ReactionGame() {
  const data = useLocation();
  const classes = useStyles();
  // The setting data provide by the user 
  const state = data.state as CircleStats;
   // Variables that tracks game state
  const gameGoal = state.goal;
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  let styleSheet: HTMLStyleElement;
  //Ensure circles doesnt spawn outside the window
  const minValue = 100;
  const destroyCircle = (circle: HTMLDivElement, method: string) => {
    circle.style.display = "none";
    // Cirlce has been clicked
    if (method === "clicked") setScore(s => s + 1);
    // Cirlce has shrunk to nothing
    else setMissed(s => s + 1);
  }
  // Customise the circle shrink rate
  const createCircleAnimation = (body: string) => {
    if (!styleSheet) {
      styleSheet = document.createElement('style');
      document.head.appendChild(styleSheet);
    } 
    styleSheet.sheet!.insertRule(body, styleSheet.children.length);
  }
  // Provides a random position for each circle
  const randomCirclePosition = (max: number) => {
    return Math.floor(Math.random() * (max - minValue) + minValue);
  }

  // Adds all the features of the circle
  const createCircle = () => {
      const circleTarget = document.createElement('div');
      circleTarget.classList.add("circle");
      circleTarget.style.width = state.size + "px";
      circleTarget.style.height = state.size + "px";
      circleTarget.style.animation = `circleShrink ${state.rate}s ease-in`;
      createCircleAnimation(`
        @keyframes circleShrink { 
          from {
            width: ${state.size}px;
            height: ${state.size}px;
          }
          to {
            width: 0px;
            height: 0px;
          }
        }`
      );
      circleTarget.id = "id" + score;
      circleTarget.style.backgroundColor = state.colour;
      circleTarget.style.left = randomCirclePosition(window.innerWidth - minValue) + "px"; 
      circleTarget.style.top = randomCirclePosition(window.innerHeight - minValue)+ "px";
      // EventListener for if the circle shrunk to nothing
      circleTarget.addEventListener("animationend", () => { destroyCircle(circleTarget, "timeout") }, false);
      // EventListener for if the circle is clicked 
      circleTarget.addEventListener("click", () => { destroyCircle(circleTarget, "clicked") }, false);
      document.getElementById("gameScreen")!.appendChild(circleTarget);
  }

  useEffect(() => {
    // Spawns a circle ever 0.5 secs
    const interval = window.setInterval(() => {
      // Checks if the goal has been achieved
      if (score < gameGoal) {
        createCircle();
      } else {
        // User is victorious
        clearInterval(interval);
        document.getElementById('menuButton')!.className = classes.menu;
        document.getElementById("victory")!.style.display = "block";
        return;
      }
    }, 500);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <TitleBar title={"Reaction Game"}/>
      <div className={classes.scoreCard}>
        <div>Score: {score}</div>
        <div className={classes.bottom}>Missed: {missed}</div>
        <Circle
          animate={true} 
          animationDuration="1s" 
          responsive={false} 
          size="100" 
          lineWidth="25" 
          // Progess bar out of 100 -> divide by set goal
          progress={Math.floor(score * (100 / gameGoal))}
          progressColor="rgb(76, 154, 255)" 
          bgColor="#ecedf0" 
          textColor="#6b778c" 
          textStyle={{
            font: 'bold 4rem Helvetica, Arial, sans-serif'
          }}
          percentSpacing={10} 
          roundedStroke={false}
          showPercentage={true} 
          showPercentageSymbol={true}
        />
      </div>
      <div id="gameScreen">
        <div id="victory" className={classes.victory}>Victory!</div>
      </div>
    </div>
  );
}
