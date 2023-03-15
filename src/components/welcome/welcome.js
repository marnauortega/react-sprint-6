import { useState } from "react";

export const Welcome = ({ next }) => {
  const [animalList, setAnimalList] = useState([
    { name: "Meowsalot", species: "cat", age: 3, id: 1 },
    { name: "Barksalot", species: "dog", age: 5, id: 2 },
  ]);

  return (
    <div className="card">
      <h1>La historia de l'heroi</h1>
      <p>Una història (una mica) interactiva </p>
      <button onClick={next}>Comença</button>
    </div>
  );
};
