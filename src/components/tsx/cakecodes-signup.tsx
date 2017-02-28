import { render, Component } from 'preact';
import { tsx } from "../../core/tsx";
import { bind } from '../../core/decko';
import { route } from "preact-router";
import {CakecodesSignupView, ISignupInfo} from "../../controllers/cakecodes-signup-ctl";
import CakecodesSignupController from "../../controllers/cakecodes-signup-ctl";
import AlertBox from './alert-box';

export default class CakecodesSignup extends Component<any, any> implements CakecodesSignupView {
    nameInput;
    emailInput;
    campaignId;
    user;
    event;
    controller: CakecodesSignupController;

    componentDidMount() {
        console.log('this.props', this.props);
        // this.token = this.props.url;
        var decoded = decodeURI(this.props.url);
        this.campaignId = this.getUrlParameter(this.props.url, 'campaignId');
        this.user = this.getUrlParameter(this.props.url, 'user');
        this.event = this.getUrlParameter(this.props.url, 'event');
        console.log('token', this.campaignId);

        this.controller = new CakecodesSignupController(this);
    }

    getUrlParameter(url, name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(url);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    getSignupInfo(): ISignupInfo {
        return {
            user: this.user,
            name: $(this.nameInput).val(),
            email: $(this.emailInput).val(),
            event: this.event
        }
    }
    getCampaignId(): string {
        return this.campaignId;
    }
    notifyMailSent() {
        console.log('SUCCESS!');
        this.setState({result: {success: true, message: 'Please check your email to activate your account!'}});
    }
    notifyError(message) {
        console.error('error', message);
        this.setState({result: {success: false, message: message}})
    }

    @bind
    handleChange(event: Event) {
        if (this.state.result) {
            this.hideErrorAlert();
        }
    }

    @bind
    onSignupClicked(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        this.controller.execute();
    }

    hideErrorAlert() {
        this.setState({result: null})
    }

    render() {
        return (
            <div class="main-page sign-up">
                <div class="header">
                    <div class="container">
                        <img src="assets/images/logo.png" />
                    </div>
                </div>
                <div class="main-content">
                    <div class="container">
                        <form class="text-center">
                            <div class="line-top">
                                <h2 class="title">Sign Up</h2>
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Name" onChange={this.handleChange} ref={(input) => this.nameInput = input} />
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Email" onChange={this.handleChange} ref={(input) => this.emailInput = input} />
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
                                <button class="creat-account green" onClick={this.onSignupClicked}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}