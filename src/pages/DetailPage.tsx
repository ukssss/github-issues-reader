import { IssueDetail } from '@components/index';
import { IssueContext } from '@contexts/index';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const { issueDetail, fetchIssueDetail } = useContext(IssueContext);

  useEffect(() => {
    if (id) {
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
