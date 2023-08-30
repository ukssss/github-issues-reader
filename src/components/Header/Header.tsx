import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <>
      <StyledH1>
        <StyledLink to="/">Facebook/React</StyledLink>
      </StyledH1>
    </>
  );
};

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export default Header;
