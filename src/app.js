import React from "react";
import ReactDOM from "react-dom";
import { Escena } from "./components/escena/escena";
import escenes from "./data/escenes.json";

const App = () => {
  return (
    <>
      {escenes.map((escena) => (
        <Escena content={escena} />
      ))}
    </>
  );
};

const main = document.querySelector("main");
ReactDOM.createRoot(main).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
