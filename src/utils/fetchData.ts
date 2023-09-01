import { API_URL, API_URL_DETAIL, OWNER, PER_PAGE, REPO } from '@constants/apiConstants';
import { Octokit } from '@octokit/rest';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const octokit = new Octokit({
  auth: ACCESS_TOKEN,
});

export const getIssueList = async (page: number) => {
  try {
    const res = await octokit.request(API_URL, {
      owner: OWNER,
      repo: REPO,
      state: 'open',
      sort: 'comments',
      per_page: PER_PAGE,
      page: page,
    });

    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getIssueDetail = async (issueNumber: number) => {
  try {
    const res = await octokit.request(API_URL_DETAIL, {
      owner: OWNER,
      repo: REPO,
      issue_number: issueNumber,
    });

    return res.data;
  } catch (err) {
    throw err;
  }
};
