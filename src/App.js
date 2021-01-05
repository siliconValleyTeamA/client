/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';

/* Internal dependencies */
import DetailPage from 'pages/DetailPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import SignupPage from 'pages/SignupPage';
import ForgotPage from 'pages/ForgotPage';
import PrivacyPage from 'pages/PrivacyPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/main" />} />
        <Route path="/main" exact component={MainPage} />
        <Route path="/detail" component={DetailPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/forgot" component={ForgotPage} />
        <Route path="/privacy" component={PrivacyPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
