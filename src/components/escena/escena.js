import escenes from "../../data/escenes.json";
import styled from "styled-components";

export const Escenes = ({ currentScene }) => {
  const SceneList = escenes.map((escena, index) => {
    console.log(index, currentScene);
    return <StyledScene className={index === currentScene ? "focus" : ""}>{escena}</StyledScene>;
  });

  return (
      {SceneList}
  );
};

const StyledScene = styled.p`
  border: 2px solid black;
  border-radius: 40px;
  text-align: center;
  padding: 20px 0;
`;
