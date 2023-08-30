import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IssueProvider } from './contexts/IssueContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <IssueProvider>
      <App />
    </IssueProvider>
  </>,
);
