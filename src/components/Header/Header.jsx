import css from "./Header.module.css";

const Header = ({ next }) => {
  return (
    <div className={css.header}>
      <h1 className={css.title}>Tic Tac Toe</h1>
      <div className={css.next}>
        <p>Next is: </p>
        <div className={css.icon}>
          {next === "cross" ? (
            <p className={css.cross}>x</p>
          ) : (
            <p className={css.circle}>o</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
