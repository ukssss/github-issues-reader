import { OWNER, REPO } from '@constants/apiConstants';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <StyledLink to="/">
            {OWNER} / {REPO}
          </StyledLink>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 30px 0;
  z-index: 1;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-transform: capitalize;
  text-decoration: none;
  color: black;
  font-size: xx-large;
  font-weight: bold;
  cursor: pointer;
`;

export default Header;
