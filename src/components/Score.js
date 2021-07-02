export function Score({ wins, losses }) {
  return (
    <section className="score-section">
      <div className="title">
        <p>Rock. Paper. Scissors.</p>
      </div>

      <div className="score-container">
        <span className="wins">
          <span className="number wins-number">{wins} </span> <span>Wins</span>
        </span>
        <span className="losses">
          <span className="number losses-number">{losses} </span>{" "}
          <span>Losses</span>
        </span>
      </div>
    </section>
  );
}
