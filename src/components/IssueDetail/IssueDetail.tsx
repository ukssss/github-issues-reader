import { IssueProps } from '@customTypes/index';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { styled } from 'styled-components';

interface IssueDetailProps {
  issue: IssueProps;
}

const IssueDetail = ({ issue }: IssueDetailProps) => {
  return (
    <>
      <StyledDiv>
        <StyledContainer>
          <StyledTitle>{issue?.title}</StyledTitle>
          <StyledIssueNumber>#{issue?.number}</StyledIssueNumber>
          <StyledAvatar src={issue?.user.avatar_url} alt="avatar" />
          <StyledWriter>작성자: {issue?.user.login}</StyledWriter>
          <StyledDate>작성일: {issue?.created_at}</StyledDate>
          <StyledComments>코멘트 : {issue?.comments}</StyledComments>
        </StyledContainer>
        <StyledViewer remarkPlugins={[remarkGfm]}>{issue?.body}</StyledViewer>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  position: relative;
`;

const StyledContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;

const StyledTitle = styled.h3`
  position: absolute;
  top: 0;
  left: 120px;
  font-size: 18px;
  font-weight: bold;
`;

const StyledIssueNumber = styled.div`
  position: absolute;
  top: 0;
  left: 60px;
  font-size: 18px;
  font-weight: bold;
`;

const StyledWriter = styled.span`
  margin-left: 10px;
`;

const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledComments = styled.span`
  position: absolute;
  top: 20px;
  right: 0;
`;

const StyledDate = styled.span`
  margin-left: 10px;
`;

const StyledViewer = styled(ReactMarkdown)`
  all: initial;

  & * {
    all: revert;
  }
`;

export default IssueDetail;
