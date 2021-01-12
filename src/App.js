/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* Internal dependencies */
import DetailPage from 'pages/DetailPage';
import CategoryPage from 'pages/CategoryPage';
import PopularPage from 'pages/PopularPage';
import MyPage from 'pages/MyPage';
import MyHistoryPage from 'pages/MyHistoryPage';
import MyJjimPage from 'pages/MyJjimPage';
import GlobalStyle from 'styles/global-styles';
import SetProfilePage from 'pages/SetProfilePage/SetProfilePage';

const MainLayout = styled.div`
  width: 60%;
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
          <Route path="/mypage/history" component={MyHistoryPage} />
          <Route path="/mypage/jjim" component={MyJjimPage} />
          <Route path="/mypage/setprofile" component={SetProfilePage} />
        </Switch>
        <GlobalStyle />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
