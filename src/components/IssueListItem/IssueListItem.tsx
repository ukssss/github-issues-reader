import React from 'react';
import { styled } from 'styled-components';
import { IssueProps } from '@customTypes/index';

interface IssueListItemProps {
  issue: IssueProps;
  children?: React.ReactNode;
  onClick: () => void;
}

const IssueListItem = ({ issue, children, onClick }: IssueListItemProps) => {
  return (
    <>
      <StyledList key={issue.id} onClick={onClick}>
        <StyledDiv>
          <StyledNumber>#{issue.number}</StyledNumber>
          <StyledTitle>{issue.title}</StyledTitle>
        </StyledDiv>
        <StyledWriter>작성자 : {issue.user.login}</StyledWriter>
        <StyledDate>작성일 : {issue.created_at}</StyledDate>
        <StyledComment>코멘트 : {issue.comments}</StyledComment>
      </StyledList>
      {children}
    </>
  );
};

const StyledList = styled.li``;
const StyledDiv = styled.div``;
const StyledTitle = styled.span``;
const StyledNumber = styled.span``;
const StyledWriter = styled.span``;
const StyledDate = styled.span``;
const StyledComment = styled.span``;

export default IssueListItem;
