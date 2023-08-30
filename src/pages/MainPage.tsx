import { IssueList } from '@components/index';
import React from 'react';

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  return (
    <div>
      <IssueList />
    </div>
  );
};

export default MainPage;
