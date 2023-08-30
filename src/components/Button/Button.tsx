import React from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ type, onClick, children }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button``;

export default Button;
