import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Navigation } from "./components/navigation/navigation";
import { Escenes } from "./components/escena/escena";
import escenes from "./data/escenes.json";
import { Welcome } from "./components/welcome/welcome";

const App = () => {
  let [currentScene, setScene] = useState(0);

  const nextScene = () => {
    currentScene < escenes.length - 1 ? setScene(++currentScene) : setScene(escenes.length - 1);
  };

  const prevScene = () => {
    currentScene > 0 ? setScene(--currentScene) : 0;
  };

  let [initialPage, setPage] = useState(true);

  const nextPage = () => {
    setPage(false);
  };

  return initialPage === true ? (
    <>
      <Welcome next={nextPage} />
    </>
  ) : (
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
