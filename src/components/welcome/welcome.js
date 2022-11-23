export const Welcome = ({ next }) => {
  return (
    <>
      <h1>The Hero Story</h1>
      <p>Hello, this is a beautiful story</p>
      <button onClick={next}>Start the story</button>
    </>
  );
};
