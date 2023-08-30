import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { MainPage, DetailPage, ErrorPage } from '@pages/index';
import { Header } from '@components/index';

function App() {
  return (
    <Router>
      <Suspense fallback="Loading result,,,">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/issue/:id" element={<DetailPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
