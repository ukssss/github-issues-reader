import { Octokit } from '@octokit/rest';

export interface GetIssueListProps {
  perPage: number;
  page: number;
}

export interface GetIssueDetailProps {
  issueNumber: number;
}

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const OWNER_NAME = 'facebook';
const REPO_NAME = 'react';

const octokit = new Octokit({
  auth: ACCESS_TOKEN,
});

export const getIssueList = async ({ perPage, page }: GetIssueListProps) => {
  try {
    const res = await octokit.request(
      `GET /repos/${OWNER_NAME}/${REPO_NAME}/issues?per_page=${perPage}&page=${page}&sort=comments`,
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getIssueDetail = async (issueNumber: number) => {
  try {
    const res = await octokit.request(
      `GET /repos/${OWNER_NAME}/${REPO_NAME}/issues/${issueNumber}`,
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    return res.data;
  } catch (err) {
    throw err;
  }
};
