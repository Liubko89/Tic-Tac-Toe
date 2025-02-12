import css from "./Wrapper.module.css";

const Wrapper = ({ children, handleReset }) => {
  return (
    <>
      <div className={css.wrapper}>{children}</div>
      <button className={css.btn} onClick={handleReset} type="button">
        Reset
      </button>
    </>
  );
};

export default Wrapper;
