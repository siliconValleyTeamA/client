/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* Internal dependencies */
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';
import DetailPage from 'pages/DetailPage';
import PopularPage from 'pages/PopularPage';
import MyPage from 'pages/MyPage';
import MyHistoryPage from 'pages/MyHistoryPage';
import MyJjimPage from 'pages/MyJjimPage';
import MyCartPage from 'pages/MyCartPage';
import GlobalStyle from 'styles/global-styles';
import MyProfilePage from 'pages/MyProfilePage';
import ScrollToTop from 'components/Global/ScrollToTop';
import EnAddProjectPage from 'pages/EnAddProjectPage';

const MainLayout = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <MainLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/popular" component={PopularPage} />
          <Route path="/project/:projectId" component={DetailPage} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/mypage/history" component={MyHistoryPage} />
          <Route path="/mypage/jjim" component={MyJjimPage} />
          <Route path="/mypage/cart" component={MyCartPage} />
          <Route path="/mypage/profile" component={MyProfilePage} />
          <Route path="/en/addproject" component={EnAddProjectPage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
