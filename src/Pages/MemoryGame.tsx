import '../App.css';
import { useEffect } from 'react';
import MemoryExplanation from '../Components/MemoryExplanation';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography }  from '@material-ui/core';
import TitleBar  from "../Components/TitleBar";

const useStyles = makeStyles({
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
  },
  defeat: {
    display: "none",
    fontSize: 24,
    color: "white",
    backgroundColor: "#FFAF68",
    width: "120px",
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

export default function MemoryGame() {
  const classes = useStyles();
  // A list of all cells created
  const totalCells = new Array<string>();
  // The size of the board (max 100 numbers)
  const boardSize = 10;
  // Variables that tracks game state
  let currentNumber = 1;
  let currentLevel = 1;
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

  const revealCard = (cell: HTMLDivElement) => {
     // Ensure the cards dont reveal before the game started
    if (gameStarted) {
      cell.innerHTML = cell.id;
      cell.style.color = "white";
      // Incorrect input, game is over
      if (cell.id !== currentNumber.toString()) {
        cell.style.backgroundColor = "#F4889A";
        // Copies the current column which removes all eventListeners
        for (let i = 0; i < boardSize; i++) { 
          const col = document.getElementById(`col ${i}`);
          if (col !== null) {
            // Copying removes the eventListeners
            const newCol = col.cloneNode(true);
            document.getElementById("memoryBoard")!.appendChild(newCol);
            col.style.display = "none";
          } 
        }
        document.getElementById('defeat')!.style.display = "block";
        document.getElementById('menuButton')!.className = classes.menu;
      } else {
        // Correct input
        cell.style.backgroundColor = "#79D45E";
        currentNumber++;
        // The round is completed
        if (cell.id === currentLevel.toString()) document.getElementById("nextRound")!.style.display = "block";
      } 
    }
  }

  const selectRandomNumber = (max: number) => Math.floor(Math.random() * max) + 1;
  
  // Check if an element is in an array
  const contains = (array: Array<number>, element: number) => {
    for(let i = 0; i < array.length; i++) {
      if(element === array[i]) return true;
    }
    return false;
  }

  // Create game depending on the current level
  const createGame = (level: number) => {
    document.getElementById("nextRound")!.style.display = "none";
    // Create the the initial board
    for (let i = 0; i < boardSize; i++) {
      // Create the column
      const col = document.createElement("div");
      col.id = `col ${i}`;
      // Create individual cells (tiles)
      for (let j = 0; j < boardSize; j++) {
        const cell = document.createElement("div");
        cell.classList.add("boardCell");
        cell.id = `(${i},${j})`;
        totalCells.push(cell.id);
        cell.innerHTML = "";
        cell.addEventListener("click", () => {revealCard(cell)});
        col.appendChild(cell);
      }
      // Add the cell to the column
      if (document.getElementById("memoryBoard") !== null) document.getElementById("memoryBoard")?.appendChild(col);
    }
    // A list of numbers that have been added to the board
    const addedNumbers = new Array<number>();
    /* Continues until all numbers are added
    e.g. If the current level is 3, ensure that 
         1, 2, 3 have all been added
    */
    while (addedNumbers.length < level) {
      for (let i = 0; i < boardSize**2; i++) {
        if (selectRandomNumber(2) === 1) {
          const chosenNum = selectRandomNumber(level);
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
  
  const startGame = () => {
    // Disables "Start Game" button after the round has started
    if (gameStarted) return;
    const board = document.getElementById("memoryBoard");
    gameStarted = true;
    if (board !== null) {
      const rows = board.children;
      // Loops through the board and flips the cells
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

  // Change from explanantion to game
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
        <div id="defeat" className={classes.defeat}>Game Over
        </div>
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
