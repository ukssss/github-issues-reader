import App from '@/App';
import { DetailPage, ErrorPage, MainPage } from '@pages/index';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'issues/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
