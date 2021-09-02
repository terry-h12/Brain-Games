import '../App.css';
import { useEffect } from 'react';
import MemoryExplanation from '../Components/MemoryExplanation';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography }  from '@material-ui/core';
import TitleBar  from "../Components/TitleBar";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  controlPanel: {
    position: "absolute",
    width: 120,
    backgroundColor: "white",
    padding: 10,
    bottom: "50%",
    marginLeft: "15px",
    borderRadius: "15px"
  },
  beginGame: {
    position: "absolute",
    margin: "24px",
    top: 40,
    right: 0,
  }
});

export default function MemoryGame() {
  const classes = useStyles();
  let currentNumber = 1;
  let currentLevel = 1;
  const totalCells = new Array<string>();
  const boardSize = 5;
  let gameStarted = false;

  // Reset all the variables and clean the board
  const clearGame = () => {
    currentLevel++;
    currentNumber = 1;
    totalCells.length = 0;
    gameStarted = false;
    for (let i = 0; i < boardSize; i++) { 
      const col = document.getElementById(`col ${i}`);
      if (col !== null) col.remove();
    }
  }

  // Ensure the cards dont reveal before the game started
  const revealCard = (cell: HTMLDivElement) => {
    if (gameStarted) {
      cell.innerHTML = cell.id;
      cell.style.color = "white";
      if (cell.id !== currentNumber.toString()) {
        cell.style.backgroundColor = "red";
      } else {
        cell.style.backgroundColor = "green";
        currentNumber++;
        // The round is completed
        if (cell.id === currentLevel.toString()) document.getElementById("nextRound")!.style.display = "block";
      } 
    }
  }
  const createGame = (level: number) => {
    document.getElementById("nextRound")!.style.display = "none";
    const selectNumber = (max: number) => {
      return Math.floor(Math.random() * max) + 1;
    }
  
    const contains = (array: Array<number>, element: number) => {
      for(let i = 0; i < array.length; i++) {
        if(element === array[i]) return true;
      }
      return false;
    }

    for (let i = 0; i < boardSize; i++) {
      const col = document.createElement("div");
      col.id = `col ${i}`;
      for (let j = 0; j < boardSize; j++) {
        const cell = document.createElement("div");
        cell.classList.add("boardCell");
        cell.id = `(${i},${j})`;
        totalCells.push(cell.id);
        cell.innerHTML = "";
        cell.addEventListener("click", () => {revealCard(cell)}, false);
        col.appendChild(cell);
      }
      if (document.getElementById('memoryBoard') !== null) document.getElementById('memoryBoard')?.appendChild(col);
    }
    const addedNumbers = new Array<number>();
    // New round/game
    if (currentNumber === 1) addedNumbers.length = 0;

    while (addedNumbers.length < level) {
      for (let i = 0; i < boardSize**2; i++) {
        if (selectNumber(2) === 1) {
          const chosenNum = selectNumber(level);
          if (document.getElementById(totalCells[i]) !== null) {
            const cell = document.getElementById(totalCells[i])!;
            if (!contains(addedNumbers, chosenNum)) {
              cell.innerHTML = cell.id = chosenNum.toString();
              addedNumbers.push(chosenNum);
            } 
          }
        }
      }
    } 
    // Removes white/empty cells
    for (let i = 0; i < boardSize**2; i++) {
      const cell = document.getElementById(totalCells[i]);
      // Populated cell has a "number" as id 
      if (cell !== null && cell.id.charAt(0) === "(") {
        document.getElementById(totalCells[i])!.style.display = "none";
      }
    }
  }

  useEffect(()=> {
    createGame(currentLevel);
  })
  
  // Starts the game
  const startGame = () => {
    if (gameStarted) return;
    const board = document.getElementById('memoryBoard');
    gameStarted = true;
    if (board !== null) {
      const rows = board.children;
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i].children;
        for (let i = 0; i < row.length; i++) {
          const cell = row[i];
          cell.innerHTML = " ";
        }
      }
    }
  }

  // Advances to the next round
  const nextRound = () => {
    clearGame();
    createGame(currentLevel);
    document.getElementById("levelTracker")!.innerHTML = ` ${currentLevel}`
  }

  const switchScene = () => {
    document.getElementById("memoryExplanation")!.style.display = "none";
    document.getElementById("memoryGame")!.style.display = "block";
  }

  return(
    <div> 
      <TitleBar title={"Memory Game"} />
      <div id="memoryExplanation">
        <MemoryExplanation />
        <Button onClick={switchScene} className={classes.beginGame} >
          <Typography style={{ color: "#8C8185"}}> Begin Game</Typography>
        </Button>
      </div>
      <div id="memoryGame"> 
        <div className={classes.controlPanel}> 
          <div>
            Current Level: <span id="levelTracker">1</span>
          </div>
          <div>
            <Button onClick={startGame}>Start game</Button>
            <Button id="nextRound" onClick={nextRound}>Next round</Button>
          </div>
        </div>
        <div id="memoryBoard"></div>
      </div>
    </div>
  )
}
