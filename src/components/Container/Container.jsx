import { useState } from "react";
import css from "./Container.module.css";
import clsx from "clsx";

const Container = ({
  index,
  next,
  changeNext,
  selectCroos,
  selectCicle,
  children,
  handleChecked,
  disabled,
}) => {
  const handleClick = () => {
    changeNext();
    if (next === "cross") {
      selectCroos(index);
    } else {
      selectCicle(index);
    }
    handleChecked(index);
  };
  return (
    <div
      className={clsx(css.container, disabled && css.disabled)}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Container;
