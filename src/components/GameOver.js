import { useState, useEffect } from "react";

const messages = [
  { state: "win", message: "You won :(" },
  { state: "loss", message: "Haha! Loser!!" },
  { state: "draw", message: "What?? A Draw?!" },
];

export function GameOver({ restartGame, gameState, userChoice, pcChoice }) {
  const [message, setMessage] = useState("");

  const iconStyles = {
    width: "120px",
    height: "120px",
  };

  useEffect(() => {
    const tmpMessage = messages.find((msg) => msg.state === gameState);
    setMessage(tmpMessage.message);
  }, []);

  return (
    <section className="game-over" onClick={restartGame}>
      <div className={`game-over__content ${gameState}`}>
        <div style={iconStyles}>{userChoice.component()}</div>
        <div>{message}</div>
        <div style={iconStyles}>{pcChoice.component()}</div>
      </div>
    </section>
  );
}
