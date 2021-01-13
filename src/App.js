/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* Internal dependencies */
import CategoryPage from 'pages/CategoryPage';
import DetailPage from 'pages/DetailPage';
import PopularPage from 'pages/PopularPage';
import MyPage from 'pages/MyPage';
import MyHistoryPage from 'pages/MyHistoryPage';
import MyJjimPage from 'pages/MyJjimPage';
import MyCartPage from 'pages/MyCartPage';
import GlobalStyle from 'styles/global-styles';
import MyProfilePage from 'pages/MyProfilePage';
import NavigationBar from 'components/Global/NavigationBar';
import ScrollToTop from 'components/Global/ScrollToTop';

const MainLayout = styled.div`
  width: 60%;
  margin: 0 auto;
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigationBar />
      <MainLayout>
        <Switch>
          <Route path="/" exact component={CategoryPage} />
          <Route path="/category/:categoryid" component={CategoryPage} />
          <Route path="/popular" component={PopularPage} />
          <Route path="/detail" component={DetailPage} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/mypage/history" component={MyHistoryPage} />
          <Route path="/mypage/jjim" component={MyJjimPage} />
          <Route path="/mypage/cart" component={MyCartPage} />
          <Route path="/mypage/profile" component={MyProfilePage} />
        </Switch>
        <GlobalStyle />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
