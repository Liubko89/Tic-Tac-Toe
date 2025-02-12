import css from "./Winner.module.css";

const Winner = ({ winner }) => {
  return (
    <div className={css.winner}>
      {!winner ? (
        <h2>There is no winner. Reset and try again</h2>
      ) : (
        <h2>Winner: {winner} !!!</h2>
      )}
    </div>
  );
};

export default Winner;
