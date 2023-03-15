import { useState } from "react";

export const Welcome = ({ next }) => {
  const [animalList, setAnimalList] = useState([
    { name: "Meowsalot", species: "cat", age: 3, id: 1 },
    { name: "Barksalot", species: "dog", age: 5, id: 2 },
  ]);

  return (
    <div className="card">
      <h1>La historia de l'heroi</h1>
      <AddAnimalForm animalList={animalList} setAnimalList={setAnimalList} />
      <p>Una història (una mica) interactiva </p>
      <button onClick={next}>Comença</button>
    </div>
  );
};

const AddAnimalForm = ({ animalList, setAnimalList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimalList((prev) => prev.concat({ name, species, age, id: Date.now() }));
    setName("");
    setSpecies("");
    setAge("");
  };

  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add new pet</legend>
          <input value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
          <input value={species} placeholder="species" onChange={(e) => setSpecies(e.target.value)} />
          <input value={age} placeholder="age" onChange={(e) => setAge(e.target.value)} />
          <button>Add pet</button>
        </fieldset>
      </form>
      <ul>
        {animalList.map((animal) => (
          <li key={animal.id}>
            {animal.name} is a {animal.species} and is {animal.age} years old.
          </li>
        ))}
      </ul>
    </>
  );
};
