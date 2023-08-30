import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Advertisement = () => {
  return (
    <StyledList>
      <StyledLink to="https://www.wanted.co.kr">
        <StyledImg
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          alt="Wanted"
        />
      </StyledLink>
    </StyledList>
  );
};

const StyledList = styled.li``;
const StyledLink = styled(Link)``;
const StyledImg = styled.img``;

export default Advertisement;
