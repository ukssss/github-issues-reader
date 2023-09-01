import router from '@routes/router';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { IssueProvider } from './contexts/IssueContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <IssueProvider>
      <RouterProvider router={router} />
    </IssueProvider>
  </>,
);
