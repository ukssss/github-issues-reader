import React, { useContext, useEffect } from 'react';
import { styled } from 'styled-components';
import { IssueContext } from '@contexts/index';
import { Advertisement, Button, IssueListItem } from '@components/index';
import { useNavigate } from 'react-router-dom';
import { getIssueDetail, getIssueList } from '@utils/fetchData';
import { calculateIndex } from '@utils/calculateIndex';

const IssueList = () => {
  const { issueList, fetchIssueList } = useContext(IssueContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchIssueList();
  }, []);

  return (
    <div>
      {/* 임시로 데이터 불러오기 용 버튼 */}
      <Button type="button" onClick={() => getIssueList({ perPage: 10, page: 1 })}>
        데이터 불러오기
      </Button>
      <Button type="button" onClick={() => getIssueDetail(13991)}>
        데이터 낱개 불러오기
      </Button>
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
      </StyledUl>
    </div>
  );
};

const StyledUl = styled.ul``;

export default IssueList;
