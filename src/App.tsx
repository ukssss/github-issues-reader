import { Header, Loading } from '@components/index';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Loading />
    </>
  );
}

const Main = styled.main`
  width: 70%;
  margin: 120px auto 0 auto;
  padding: 0;
`;

export default App;
