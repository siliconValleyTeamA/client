/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* Internal dependencies */
import DetailPage from 'pages/DetailPage';
import CategoryPage from 'pages/CategoryPage';
import PopularPage from 'pages/PopularPage';
import MyPage from 'pages/MyPage';
import GlobalStyle from 'styles/global-styles';

const MainLayout = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={CategoryPage} />
          <Route path="/category/:category" exact component={CategoryPage} />
          <Route path="/popular" exact component={PopularPage} />
          <Route path="/detail" component={DetailPage} />
          <Route path="/mypage" component={MyPage} />
        </Switch>
        <GlobalStyle />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
