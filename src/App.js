/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { SearchProvider } from './modules/contextAPI/search';

/* Internal dependencies */
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';
import EnDetailPage from 'pages/DetailPage/EnDetailPage';
import ArDetailPage from 'pages/DetailPage/ArDetailPage';
import KrDetailPage from 'pages/DetailPage/KrDetailPage';
import PopularPage from 'pages/PopularPage';
import MyPage from 'pages/MyPage';
import MyInvestmentPage from 'pages/MyInvestmentPage';
import MyJjimPage from 'pages/MyJjimPage';
import MyCartPage from 'pages/MyCartPage';
import GlobalStyle from 'styles/global-styles';
import ScrollToTop from 'components/Global/ScrollToTop';
import EnAddProjectPage from 'pages/EnAddProjectPage';
import ArAddProjectPage from 'pages/ArAddProjectPage';
import KoAddProjectPage from 'pages/KoAddProjectPage';

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
        <SearchProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/category" component={CategoryPage} />
            <Route path="/popular" component={PopularPage} />
            <Route path="/en/project/:projectId" component={EnDetailPage} />
            <Route path="/ko/project/:projectId" component={KrDetailPage} />
            <Route path="/ar/project/:projectId" component={ArDetailPage} />
            <Route path="/mypage" exact component={MyPage} />
            <Route path="/mypage/investment" component={MyInvestmentPage} />
            <Route path="/mypage/jjim" component={MyJjimPage} />
            <Route path="/mypage/cart" component={MyCartPage} />
            <Route path="/en/addproject" component={EnAddProjectPage} />
            <Route path="/ar/addproject" component={ArAddProjectPage} />
            <Route path="/ko/addproject" component={KoAddProjectPage} />
          </Switch>
        </SearchProvider>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
