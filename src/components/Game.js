import { Rock } from "../Icons/Rock";
import { Paper } from "../Icons/Paper";
import { Scissors } from "../Icons/Scissors";

export function Game({ game, setGameOver }) {
  return (
    <section className="game-section">
      <div className="user-choices">
        <p>
          <b>
            <i>You</i>
          </b>
        </p>
        <div className="game-icons">
          <div
            onClick={() => {
              game(1);
            }}
          >
            <Rock />
          </div>
          <div
            onClick={() => {
              game(2);
            }}
          >
            <Paper />
          </div>
          <div
            onClick={() => {
              game(3);
            }}
          >
            <Scissors />
          </div>
        </div>
      </div>

      <h1 className="vs-text">vs</h1>

      <div className="pc-choice">
        <p>
          <b>
            <i>Computer</i>
          </b>
        </p>
        <div className="pc-choice__question-mark">?</div>
      </div>
    </section>
  );
}
