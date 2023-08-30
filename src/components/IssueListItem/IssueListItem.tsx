import React from 'react';
import { styled } from 'styled-components';

interface Issue {
  id: number;
  number: number;
  title: string;
  user: {
    login: string;
  };
  comments: number;
}

interface IssueListItemProps {
  issue: Issue;
  children?: React.ReactNode;
}

const IssueListItem = ({ issue, children, ...restProps }: IssueListItemProps) => {
  return (
    <>
      <StyledList key={issue.id} {...restProps}>
        <StyledDiv>
          <StyledNumber>#{issue.number}</StyledNumber>
          <StyledTitle>{issue.title}</StyledTitle>
        </StyledDiv>
        <StyledWriter>작성자 : {issue.user.login}</StyledWriter>
        <StyledDate></StyledDate>
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
