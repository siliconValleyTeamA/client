/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

/* Internal dependencies */
import DetailPage from 'pages/DetailPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import SignupPage from 'pages/SignupPage';
import FindIdPage from 'pages/FindIdPage';
import FindPwdPage from 'pages/FindPwdPage';
import PrivacyPage from 'pages/PrivacyPage';
import GlobalStyle from 'styles/global-styles';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/main" />} />
        <Route path="/main" exact component={MainPage} />
        <Route path="/detail" component={DetailPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/find/id" component={FindIdPage} />
        <Route path="/find/pwd" component={FindPwdPage} />
        <Route path="/privacy" component={PrivacyPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
