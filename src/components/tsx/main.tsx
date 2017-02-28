/**
 * Created on 11/11/16.
 */
import {render, Component} from 'preact';
import {tsx} from "../../core/tsx";
import Router  from 'preact-router';
import LandingPage from "./landing-page";
import SigninPage from "./signin-page";
import ResetPasswordMail from "./reset-password-mail";
import ResetPassword from "./reset-password";
import CakecodesSignup from "./cakecodes-signup";
import {createHashHistory} from 'history';

const App = () => {
    return (
        <div class="app">
            <Router history={createHashHistory()} >
                <SigninPage path="/"/>
                <SigninPage path="/signin" />
                <LandingPage path="/signup"/>
                <CakecodesSignup path="/cakecodes"/>
                <ResetPasswordMail path="/forgot-password" />
                <ResetPassword path="reset-password" />
            </Router>
        </div>
    )
};
render(<App />, document.getElementById('app'));