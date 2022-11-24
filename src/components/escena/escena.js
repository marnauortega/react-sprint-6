import { data } from "../../data/escenes";
import styled from "styled-components";

export const Escenes = ({ currentScene }) => {
  const SceneList = data.map((escena, index) => {
    return (
      <li key={data.id}>
        <StyledScene className={index === currentScene ? "focus" : ""}>{escena.content}</StyledScene>
      </li>
    );
  });

  return (
    <>
      <ul>{SceneList}</ul>
      <img src={data[currentScene].img} className="bg"></img>
    </>
  );
};

const StyledScene = styled.p`
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 40px;
  text-align: center;
  padding: 20px 0;
`;
