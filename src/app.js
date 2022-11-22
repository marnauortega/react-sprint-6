import ReactDOM from "react-dom";
import { Escena } from "./components/escena/escena";

const main = document.querySelector("main");

const App = () => {
  return (
    <>
      <Escena />
    </>
  );
};

ReactDOM.render(<App />, main);
