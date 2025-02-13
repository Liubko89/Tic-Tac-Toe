import { nanoid } from "nanoid";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Circle from "./components/Circle/Circle";
import Cross from "./components/Cross/Cross";
import { useEffect, useState } from "react";
import { checkWinner } from "./helpers/checkWinner";
import Winner from "./components/Winner/Winner";

function App() {
  const field = Array(9).fill(null);
  const [next, setNext] = useState("cross");
  const [cross, setCross] = useState([]);
  const [circle, setCircle] = useState([]);
  const [checked, setChecked] = useState([]);
  const [winner, setWinner] = useState(null);

  const changeNext = () => {
    setNext((prev) => (prev === "cross" ? "circle" : "cross"));
  };
  const selectCroos = (index) => {
    setCross((prev) => [...prev, index]);
  };
  const selectCircle = (index) => {
    setCircle((prev) => [...prev, index]);
  };

  const handleChecked = (index) => {
    setChecked((prev) => [...prev, index]);
  };

  const handleReset = () => {
    setNext("cross");
    setCross([]);
    setCircle([]);
    setChecked([]);
  };

  useEffect(() => {
    setWinner(checkWinner(cross, circle));
  }, [cross, circle]);

  return (
    <>
      <Header next={next} />
      <Wrapper handleReset={handleReset}>
        {field.map((_, i) => (
          <Container
            key={nanoid()}
            index={i}
            next={next}
            changeNext={changeNext}
            selectCroos={selectCroos}
            selectCircle={selectCircle}
            handleChecked={handleChecked}
            disabled={checked.includes(i)}
          >
            {cross.includes(i) && <Cross />}
            {circle.includes(i) && <Circle />}
          </Container>
        ))}

        {(winner || checked.length === 9) && <Winner winner={winner} />}
      </Wrapper>
    </>
  );
}

export default App;
