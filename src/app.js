import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Navigation } from "./components/navigation/navigation";
import { Escenes } from "./components/escena/escena";
import escenes from "./data/escenes.json";

const App = () => {
  let [currentScene, setScene] = useState(0);

  const nextScene = () => {
    currentScene < escenes.length - 1 ? setScene(++currentScene) : setScene(escenes.length - 1);
  };

  const prevScene = () => {
    currentScene > 0 ? setScene(--currentScene) : 0;
  };
  return (
    <>
      <Navigation next={nextScene} prev={prevScene} />
      <Escenes currentScene={currentScene} />
    </>
  );
};

const main = document.querySelector("main");
ReactDOM.createRoot(main).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
