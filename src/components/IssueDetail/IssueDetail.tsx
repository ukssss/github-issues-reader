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
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div``;
const StyledContainer = styled.div``;
const StyledTitle = styled.title``;
const StyledIssueNumber = styled.div``;
const StyledWriter = styled.span``;
const StyledAvatar = styled.img``;
const StyledComments = styled.span``;
const StyledDate = styled.span``;

export default IssueDetail;
