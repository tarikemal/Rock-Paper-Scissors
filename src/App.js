import "./App.scss";

import { Rock } from "./Icons/Rock";
import { Paper } from "./Icons/Paper";
import { Scissors } from "./Icons/Scissors";

import { Score } from "./components/Score";
import { Game } from "./components/Game";
import { GameOver } from "./components/GameOver";

import { useState, useEffect } from "react";

export const moves = [
  {
    id: 1,
    name: "rock",
    component: Rock,
    losesTo: "paper",
    winsTo: "scissors",
  },
  {
    id: 2,
    name: "paper",
    component: Paper,
    losesTo: "scissors",
    winsTo: "rock",
  },
  {
    id: 3,
    name: "scissors",
    component: Scissors,
    losesTo: "rock",
    winsTo: "paper",
  },
];

function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameState, setGameState] = useState("");
  const [userChoice, setUserChoice] = useState(null);
  const [pcChoice, setPcChoice] = useState(null);

  const game = (id) => {
    const _pcChocice = moves[Math.floor(Math.random() * 3)];
    const _userChoice = moves[id - 1];
    setUserChoice(_userChoice);
    setPcChoice(_pcChocice);
    // console.log(_pcChocice);
    // console.log(_userChoice);
    if (_userChoice.name === _pcChocice.name) setGameState("draw");
    else if (_userChoice.winsTo === _pcChocice.name) {
      setGameState("win");
      setWins((wins) => wins + 1);
    } else if (_userChoice.losesTo === _pcChocice.name) {
      setGameState("loss");
      setLosses((losses) => losses + 1);
    }
    const timeOut = setTimeout(() => setGameOver(true), 50);
    return timeOut;
  };

  const restartGame = () => {
    setGameOver(false);
    setGameState("");
    setPcChoice(null);
    setUserChoice(null);
  };

  return (
    <div className="App">
      <Score wins={wins} losses={losses} />
      <Game game={game} setGameOver={setGameOver} />
      {gameOver && (
        <GameOver
          restartGame={restartGame}
          gameState={gameState}
          userChoice={userChoice}
          pcChoice={pcChoice}
        />
      )}
    </div>
  );
}

export default App;
