import { render, Component } from 'preact';
import { tsx } from "../../core/tsx";
import { bind } from '../../core/decko';
import { route } from "preact-router";
import { Link } from "preact-router";
import {ResetPasswordView} from '../../controllers/reset-password-ctl';
import ResetPasswordController from '../../controllers/reset-password-ctl';
import AlertBox from './alert-box';

interface IResult {
    success: boolean,
    message: string
}

export default class ResetPassword extends Component<any, any> implements ResetPasswordView{
    token;
    controller: ResetPasswordController;
    newPasswordInput;
    confirmedPasswordInput;
    state = {result: null as IResult};

    componentDidMount() {
        console.log('this.props', this.props);
        // this.token = this.props.url;
        var decoded = decodeURI(this.props.url);
        this.token = this.getUrlParameter(this.props.url, 'token');
        console.log('token', this.token);

        this.controller = new ResetPasswordController(this);
    }

    getUrlParameter(url, name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(url);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    @bind
    onUpdatePasswordClicked(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        this.controller.execute();
    }

    @bind
    handleChange(event: Event) {
        if (this.state.result) {
            this.hideErrorAlert();
        }
    }

    hideErrorAlert() {
        this.setState({result: null})
    }

    getNewPassword(): string {
        return $(this.newPasswordInput).val();
    }
    getConfirmedPassword(): string {
        return $(this.confirmedPasswordInput).val();
    }
    notifyError(message) {
        console.error('error', message);
        this.setState({result: {success: false, message: message}})
    }
    notifySuccess() {
        console.log('SUCCESS!');
        this.setState({result: {success: true, message: 'Password has been reset!'}});
    }
    getToken(): string {
        return this.token;
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
                                <h2 class="title">Reset your password</h2>
                                <p class="note">Strong passwords include numbers, letters, and punctuation marks. </p>
                            </div>
                            <div class="field">
                                <input type="password" placeholder="New password" onChange={this.handleChange} ref={(input) => this.newPasswordInput = input} />
                            </div>
                            <div class="field">
                                <input type="password" placeholder="Confirm password" onChange={this.handleChange} ref={(input) => this.confirmedPasswordInput = input} />
                            </div>
                            {
                                (() => {
                                    if (this.state.result && this.state.result.success) {
                                        return (
                                            <AlertBox message={this.state.result.message} alertType="alert-success" />
                                        )
                                    } else if (this.state.result && !this.state.result.success) {
                                        return (
                                            <AlertBox message={this.state.result.message} alertType="alert-danger" />
                                        )
                                    } else {
                                        return null;
                                    }
                                })()
                            }
                            <div class="field">
                                <button class="creat-account green" onClick={this.onUpdatePasswordClicked} >Update Password</button>
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