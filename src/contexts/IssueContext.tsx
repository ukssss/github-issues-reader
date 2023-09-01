import { IssueProps } from '@customTypes/index';
import { getIssueDetail, getIssueList } from '@utils/fetchData';
import React, { createContext, useState } from 'react';

interface IssueContextProps {
  issueList: IssueProps[];
  issueDetail: IssueProps | null;
  fetchIssueList: () => Promise<void>;
  fetchIssueDetail: (issueNumber: string) => Promise<void>;
  isLoading: boolean;
}

interface IssueProviderProps {
  children: React.ReactNode;
}

const initialContext: IssueContextProps = {
  issueList: [],
  issueDetail: null,
  fetchIssueList: async () => {},
  fetchIssueDetail: async () => {},
  isLoading: false,
};

export const IssueContext = createContext<IssueContextProps>(initialContext);

export const IssueProvider = ({ children }: IssueProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [issueList, setIssueList] = useState([]);
  const [issueDetail, setIssueDetail] = useState(null);
  const [page, setPage] = useState(1);

  const fetchIssueList = async () => {
    setIsLoading(true);
    try {
      const data = await getIssueList(page);
      setPage(prev => prev + 1);
      setIssueList(prev => [...prev, ...data]);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchIssueDetail = async (issueNumber: string) => {
    setIsLoading(true);
    try {
      const data = await getIssueDetail(issueNumber);
      setIssueDetail(data);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IssueContext.Provider
      value={{ issueList, issueDetail, fetchIssueList, fetchIssueDetail, isLoading }}
    >
      {children}
    </IssueContext.Provider>
  );
};
