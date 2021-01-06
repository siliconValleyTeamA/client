/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';

/* Internal dependencies */
import DetailPage from 'pages/DetailPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import SignupPage from 'pages/SignupPage';
import FindIdPage from 'pages/FindIdPage';
import FindPwdPage from 'pages/FindPwdPage';
import PrivacyPage from 'pages/PrivacyPage';
import MyPage from 'pages/MyPage';
import EmailSignupPage from 'pages/EmailSignupPage';
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
          <Route path="/" exact render={() => <Redirect to="/main" />} />
          <Route path="/main" exact component={MainPage} />
          <Route path="/detail" component={DetailPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/emailsignup" component={EmailSignupPage} />
          <Route path="/find/id" component={FindIdPage} />
          <Route path="/find/pwd" component={FindPwdPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/mypage" component={MyPage} />
        </Switch>
        <GlobalStyle />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
