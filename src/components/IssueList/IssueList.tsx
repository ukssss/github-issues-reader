import React, { useContext, useEffect } from 'react';
import { styled } from 'styled-components';
import { IssueContext } from '@contexts/index';
import { Advertisement, IssueListItem, ScrollObserver } from '@components/index';
import { useNavigate } from 'react-router-dom';
import { calculateIndex } from '@utils/calculateIndex';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { getIssueList } from '@utils/fetchData';

const IssueList = () => {
  const { issueList, fetchIssueList } = useContext(IssueContext);
  const navigate = useNavigate();
  const target = useInfiniteScroll(fetchIssueList);

  useEffect(() => {
    getIssueList({ perPage: 10, page: 1 });
  }, []);

  return (
    <div>
      <StyledUl>
        {issueList.map((issue, index) =>
          calculateIndex(index + 1) ? (
            <IssueListItem
              key={index}
              issue={issue}
              onClick={() => {
                navigate(`/issue/${issue.number}`);
              }}
            >
              <Advertisement />
            </IssueListItem>
          ) : (
            <IssueListItem
              key={index}
              issue={issue}
              onClick={() => {
                navigate(`/issue/${issue.number}`);
              }}
            ></IssueListItem>
          ),
        )}
        <ScrollObserver ref={target} />
      </StyledUl>
    </div>
  );
};

const StyledUl = styled.ul``;

export default IssueList;
