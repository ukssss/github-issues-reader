import React, { useContext, useEffect } from 'react';
import { styled } from 'styled-components';
import { IssueContext } from '@contexts/index';
import { getIssueDetail, getIssueList } from '@utils/index';
import { Button, IssueListItem } from '@components/index';

const IssueList = () => {
  const { issueList, fetchIssueList } = useContext(IssueContext);

  useEffect(() => {
    fetchIssueList();
  }, []);
  return (
    <div>
      IssueList
      <Button type="button" onClick={() => getIssueList({ perPage: 3, page: 3 })}>
        IssueList
      </Button>
      <Button type="button" onClick={() => getIssueDetail({ issueNumber: 27255 })}>
        IssueDetail
      </Button>
      <StyledUl>
        {issueList.map((issue, index) => (
          <IssueListItem key={index} issue={issue}></IssueListItem>
        ))}
      </StyledUl>
    </div>
  );
};

const StyledUl = styled.ul``;

export default IssueList;
