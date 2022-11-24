export const Welcome = ({ next }) => {
  return (
    <div className="card">
      <h1>La historia de l'heroi</h1>
      <p>Una història (una mica) interactiva </p>
      <button onClick={next}>Comença</button>
    </div>
  );
};
