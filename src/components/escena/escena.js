import styled from "styled-components";

export const Escena = (props) => {
  return <StyledButton>{props.content}</StyledButton>;
};

const StyledButton = styled.p`
  border: 2px solid black;
  border-radius: 40px;
  text-align: center;
  padding: 20px 0;
`;
