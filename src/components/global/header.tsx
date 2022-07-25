import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #222;
`;
const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
const StyledLi = styled.li`
  padding: 5px;
  :hover {
    background: yellow;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-self: center;
  font-size: 20px;
  background: #222;
  color: #fff;
  letter-spacing: 2px;
  padding: 15px;
  border: 1px solid #f1f2f5;
  font-weight: bold;
`;
const Header = () => (
  <StyledHeader>
    <StyledLogo>{`{uesHooks}`}</StyledLogo>
    {/* <nav>
      <StyledUl>
        <StyledLi>
          <Link to="/">Home</Link>
        </StyledLi>
      </StyledUl>
    </nav> */}
  </StyledHeader>
);

export default Header;
