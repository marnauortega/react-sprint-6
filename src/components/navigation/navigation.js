import styled from "styled-components";
import { prevScene, nextScene } from "../../app";

export const Navigation = ({ next, prev }) => {
  return (
    <Nav>
      <NavButton className="prev" onClick={prev}>
        Anterior
      </NavButton>
      <NavButton className="next" onClick={next}>
        Següent
      </NavButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
`;

const NavButton = styled.button`
  flex: 1;
  padding: 20px 0;
`;
