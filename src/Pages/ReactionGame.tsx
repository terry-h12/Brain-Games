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
  }
});

export default function ReactionGame() {
  const data = useLocation();
  const classes = useStyles();
  const state = data.state as CircleStats;
  const gameGoal = state.goal;
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);

  // CIrlce has been clicked or shrunk to nothing
  const destroyCircle = (circle: HTMLDivElement, method: string) => {
    circle.style.display = "none";
    if (method === "clicked") setScore(s => s + 1);
    else setMissed(s => s + 1);
    
  }
  let styleSheet: HTMLStyleElement;
  const createCircleAnimation = (body: string) => {
    if (!styleSheet) {
      styleSheet = document.createElement('style');
      document.head.appendChild(styleSheet);
    } 
    styleSheet.sheet!.insertRule(body, styleSheet.children.length);
  }

  // Provides a random position for each circle
  const randomCirclePosition = (max: number) =>{
    const min = 100;
    return Math.floor(Math.random() * (max - min) + min);
  }

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
      circleTarget.style.left = randomCirclePosition(780) + "px"; 
      circleTarget.style.top = randomCirclePosition(150)+ "px";
      circleTarget.addEventListener("animationend", () => { destroyCircle(circleTarget, "timeout") }, false) 
      circleTarget.addEventListener("click", () => { destroyCircle(circleTarget, "clicked") }, false);
      document.getElementById('gameScreen')!.appendChild(circleTarget);
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (score < gameGoal) {
        createCircle();
      } else {
        console.log("victory");
        clearInterval(interval);
        document.getElementById('reactionVictory')!.style.display = "block";
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
          progress={Math.floor(score * (100/gameGoal))}
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
        <div id="reactionVictory">
          VICTORY
        </div>
      </div>
    </div>
  );
}
