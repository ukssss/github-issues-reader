import React, { useContext, useEffect } from 'react';
import { IssueDetail } from '@components/index';
import { IssueContext } from '@contexts/index';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { issueNumber } = useParams();
  const { issueDetail, fetchIssueDetail } = useContext(IssueContext);

  useEffect(() => {
    if (issueNumber) {
      const id = parseInt(issueNumber);
      fetchIssueDetail(id);
    }
  }, []);

  return (
    <div>
      <IssueDetail issue={issueDetail} />
    </div>
  );
};

export default DetailPage;
