import spinner from '@assets/spinner.svg';

import { IssueContext } from '@contexts/IssueContext';
import { useContext } from 'react';
import { styled } from 'styled-components';

const Loading = () => {
  const { isLoading } = useContext(IssueContext);

  return (
    <>
      {isLoading && (
        <StyledContainer>
          <StyledImage src={spinner} alt="Loading" />
        </StyledContainer>
      )}
    </>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(241, 242, 243);
`;
const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Loading;
