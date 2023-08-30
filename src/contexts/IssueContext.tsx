import { getIssueDetail, getIssueList } from '@utils/fetchData';
import React, { createContext, useState } from 'react';
import { IssueProps } from '@customTypes/index';

interface IssueContextProps {
  issueList: IssueProps[];
  issueDetail: IssueProps | null;
  fetchIssueList: () => Promise<void>;
  fetchIssueDetail: (issueNumber: number) => Promise<void>;
}

interface IssueProviderProps {
  children: React.ReactNode;
}

const initialContext: IssueContextProps = {
  issueList: [],
  issueDetail: null,
  fetchIssueList: async () => {},
  fetchIssueDetail: async () => {},
};

export const IssueContext = createContext<IssueContextProps>(initialContext);

export const IssueProvider = ({ children }: IssueProviderProps) => {
  const [issueList, setIssueList] = useState([]);
  const [issueDetail, setIssueDetail] = useState(null);
  const [page, setPage] = useState(1);

  const fetchIssueList = async () => {
    try {
      const data = await getIssueList({ perPage: 10, page: page });
      setPage(prev => prev + 1);
      setIssueList(prev => [...prev, ...data]);
    } catch (err) {
      throw err;
    }
  };

  const fetchIssueDetail = async (issueNumber: number) => {
    try {
      const data = await getIssueDetail(issueNumber);
      setIssueDetail(data);
    } catch (err) {
      throw err;
    }
  };

  return (
    <IssueContext.Provider value={{ issueList, issueDetail, fetchIssueList, fetchIssueDetail }}>
      {children}
    </IssueContext.Provider>
  );
};
