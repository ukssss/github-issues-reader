import { Header, Loading } from '@components/index';
import { DetailPage, ErrorPage, MainPage } from '@pages/index';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/issue/:issueNumber" element={<DetailPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </Router>
      <Loading />
    </>
  );
}

export default App;
