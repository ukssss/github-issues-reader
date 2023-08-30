import React from 'react';
import { styled } from 'styled-components';
import { IssueProps } from '@customTypes/index';

interface IssueDetailProps {
  issue: IssueProps;
}

const IssueDetail = ({ issue }: IssueDetailProps) => {
  return (
    <>
      <StyledDiv>
        <StyledContainer>
          <StyledTitle>title : {issue?.title}</StyledTitle>
          <StyledIssueNumber>#{issue?.number}</StyledIssueNumber>
          <StyledAvatar src={issue?.user.avatar_url} alt="avatar" />
          <StyledWriter>작성자 : {issue?.user.login}</StyledWriter>
          <StyledDate>만든날짜 : {issue?.created_at}</StyledDate>
          <StyledComments>코멘트 : {issue?.comments}</StyledComments>
        </StyledContainer>
        {issue?.body}
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  width: 1200px;
  margin: 100px auto;
  position: relative;
`;
const StyledContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;
const StyledTitle = styled.h3`
  position: absolute;
  top: -20px;
  left: 120px;
`;
const StyledIssueNumber = styled.div`
  position: absolute;
  left: 60px;
`;
const StyledWriter = styled.span`
  margin-left: 10px;
`;
const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
`;
const StyledComments = styled.span`
  position: absolute;
  right: 0;
`;
const StyledDate = styled.span`
  margin-left: 5px;
`;

export default IssueDetail;
