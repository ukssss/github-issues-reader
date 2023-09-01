import { Advertisement, IssueListItem, ScrollObserver } from '@components/index';
import { IssueContext } from '@contexts/index';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { calculateIndex } from '@utils/calculateIndex';
import { getIssueList } from '@utils/fetchData';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const IssueList = () => {
  const { issueList, fetchIssueList } = useContext(IssueContext);
  const navigate = useNavigate();
  const target = useInfiniteScroll(fetchIssueList);

  useEffect(() => {
    getIssueList(1);
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
                navigate(`/issues/${issue.number}`);
              }}
            >
              <Advertisement />
            </IssueListItem>
          ) : (
            <IssueListItem
              key={index}
              issue={issue}
              onClick={() => {
                navigate(`/issues/${issue.number}`);
              }}
            ></IssueListItem>
          ),
        )}
        <ScrollObserver ref={target} />
      </StyledUl>
    </div>
  );
};

const StyledUl = styled.ul`
  list-style: none;
`;

export default IssueList;
