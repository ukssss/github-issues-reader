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

const StyledList = styled.li`
  position: relative;
  padding: 20px 0px 20px 0px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;
const StyledDiv = styled.div`
  margin-bottom: 10px;
`;
const StyledTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
`;
const StyledNumber = styled.span`
  font-weight: 600;
  font-size: 18px;
  margin-right: 5px;
`;
const StyledWriter = styled.span`
  margin-right: 5px;
`;
const StyledDate = styled.span``;
const StyledComment = styled.span`
  position: absolute;
  right: 0;
  transform: translateY(-50%);
`;

export default IssueListItem;
