import {render, Component} from 'preact';
import {tsx} from "../../core/tsx";
import {bind} from '../../core/decko';
import {route} from "preact-router";
import {Link} from "preact-router";

export default class SigninPage extends Component{
    @bind
    onCreateAccountButtonClick() {
        route('/signup', false);
    }

    render() {
        return (
            <div>
                <div class="header">
                    <div class="container">
                        <img src="assets/images/logo.png" />
                    </div>
                </div>
                <div class="main-content">
                    <div class="container">
                        <form class="text-center">
                            <div class="line-top">
                                <h2 class="title">Central Authentication Service</h2>
                                <p class="note">Sign in to continue to Flashcoin</p>
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div class="field">
                                <button class="next-step green">Next</button>
                                <p class="m10t">
                                    <Link  href="/forgot-password" class="pull-right forgot-pwd" >Forgot password?</Link>
                                    {/*<a class="pull-right forgot-pwd" href="#forgot-password">Forgot password?</a>*/}
                                </p>
                            </div>
                            <div class="field m100t">
                                <button class="creat-account transparent" onClick={this.onCreateAccountButtonClick}>Create Account</button>
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
                    <p class="text-center"><img src="assets/images/flag-footer.png" class="m15r" />Copyright (c) 2016 Flashnet Tech, Inc. Montreal, Canada. All Rights Reserved. Flash is a trademark of Flashnet Tech, Inc.</p>
                </footer>
            </div>
        )
    }
}