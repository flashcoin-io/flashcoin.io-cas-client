import {render, Component} from 'preact';
import {tsx} from "../../core/tsx";
import {bind} from '../../core/decko';
import {route} from "preact-router";
import {Link} from "preact-router";
import ResetPasswordMailController from "../../controllers/reset-password-mail";
import {ResetPasswordMailView} from "../../controllers/reset-password-mail";
import AlertBox from "./alert-box";

interface IResult {
    success: boolean,
    message: string
}

export default class ResetPasswordMail extends Component<any, any> implements ResetPasswordMailView {
    controller: ResetPasswordMailController;
    emailInput;
    state = {result: null as IResult};

    componentDidMount() {
        this.controller = new ResetPasswordMailController(this);
    }

    @bind
    sendInstructionsButtonClicked(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        this.hideErrorAlert();
        this.controller.execute();
    }

    @bind
    handleChange(event: Event) {
        if (this.state.result) {
            this.hideErrorAlert();
        }
    }

    getEmail(): string {
        console.log('this.emailInput.getText()', $(this.emailInput).val());
        return $(this.emailInput).val();
    }

    notifyMailSent() {
        this.setState({result: {success: true, message: 'Please check your account for password reset instructions. Please check you spam folder also.'}})
    }

    notifyError(message) {
        this.setState({result: {success: false, message: message}})
    }

    hideErrorAlert() {
        this.setState({result: null})
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
                                <h2 class="title">Reset Password</h2>
                                <p class="note">Please enter your registered email address to receive the password reset instructions.</p>
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Email" class="input-email" onChange={this.handleChange} ref={(input) => this.emailInput = input} />
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
                                <button class="creat-account green" onClick={this.sendInstructionsButtonClicked}>Send Instructions</button>
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