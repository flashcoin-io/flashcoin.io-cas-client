import {render, Component} from 'preact';
import {tsx} from "../../core/tsx";
import {bind} from '../../core/decko';
import {route} from "preact-router";

export default class LandingPage extends Component{

    @bind
    onSigninButtonClick() {
        route('signin', false);
    }

    render() {
        return (
            <div class="main-page">
                <div class="header">
                    <div class="container">
                        <img src="assets/images/logo.png"/>
                        <button class="sign-in pull-right" onClick={this.onSigninButtonClick}>Sign in</button>
                    </div>
                </div>
                <div class="main-content">
                    <div class="container">
                        <form class="text-center">
                            <div class="line-top">
                                <h2 class="title">Central Authentication Service</h2>
                                <p class="note">Create your Flashcoin Account</p>
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Name"/>
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Email"/>
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Password"/>
                            </div>
                            <div class="field">
                                <button class="creat-account green">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
                <footer class="footer">
                    <div class="col-xs-12 text-center">
                        <div class="col-xs-4 col hidden-sm hidden-xs"></div>
                        <div class="col-xs-12 col-md-4 col-ul">
                            <ul>
                                <li><a href="terms-of-service.html" target="_blank">Terms of Service</a></li>
                                <li><a href="privacy.html" target="_blank">Privacy</a></li>
                                <li><a href="policy.html" target="_blank">Policy</a></li>
                                <li><a href="support.html" target="_blank">Support</a></li>
                                <li><a href="contact.html" target="_blank">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-4 col hidden-sm hidden-xs"></div>
                    </div>
                    <p class="text-center"><img src="assets/images/flag-footer.png" class="m15r"/>Copyright (c) 2016 Flashnet Tech, Inc. Montreal, Canada. All Rights Reserved. Flash is a trademark of Flashnet Tech, Inc.</p>
                </footer>
            </div>
        )
    }
}