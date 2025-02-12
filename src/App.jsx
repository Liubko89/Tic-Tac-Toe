import { nanoid } from "nanoid";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Cicle from "./components/Cicle/Cicle";
import Cross from "./components/Cross/Cross";
import { useEffect, useState } from "react";
import { checkWinner } from "./helpers/checkWinner";
import Winner from "./components/Winner/Winner";

function App() {
  const field = Array(9).fill(null);
  const [next, setNext] = useState("cross");
  const [cross, setCross] = useState([]);
  const [cicle, setCicle] = useState([]);
  const [checked, setChecked] = useState([]);
  const [winner, setWinner] = useState(null);

  const changeNext = () => {
    setNext((prev) => (prev === "cross" ? "cicle" : "cross"));
  };
  const selectCroos = (index) => {
    setCross((prev) => [...prev, index]);
  };
  const selectCicle = (index) => {
    setCicle((prev) => [...prev, index]);
  };

  const handleChecked = (index) => {
    setChecked((prev) => [...prev, index]);
  };

  const handleReset = () => {
    setNext("cross");
    setCross([]);
    setCicle([]);
    setChecked([]);
  };

  useEffect(() => {
    setWinner(checkWinner(cross, cicle));
  }, [cross, cicle]);

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
            selectCicle={selectCicle}
            handleChecked={handleChecked}
            disabled={checked.includes(i)}
          >
            {cross.includes(i) && <Cross />}
            {cicle.includes(i) && <Cicle />}
          </Container>
        ))}

        {(winner || checked.length === 9) && <Winner winner={winner} />}
      </Wrapper>
    </>
  );
}

export default App;
