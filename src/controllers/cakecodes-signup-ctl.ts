export default class CakecodesSignupController {
    view: CakecodesSignupView;

    constructor(view: CakecodesSignupView) {
        this.view = view;
    }

    public execute() {
        var signupInfo: ISignupInfo = this.view.getSignupInfo();
        console.log('signupInfo',signupInfo);
        var campaignId = this.view.getCampaignId();
        if (!signupInfo.email) {
            this.view.notifyError('Please enter your email');
            return;
        }
        if (!signupInfo.name) {
            this.view.notifyError('Please enter your name');
            return;
        }

        var self = this;
        $.ajax({
            url: 'https://keys.flashcoin.io/campaign/cakecodes/' + campaignId,
            type: 'POST',
            data: {
                user: signupInfo.user, email: signupInfo.email, event: signupInfo.event, name: signupInfo.name
            },
            success: function (data) {
                console.log('data', data);
                self.view.notifyMailSent();
            },
            error: function(err) {
                console.log('err', err.responseText);
                console.log('data', err.responseJSON);
                try {
                    var errObj = JSON.parse(err.responseText);
                    if (errObj && errObj.rc !== 1) {
                        if (errObj.status === 'EMAIL_IN_USED') {
                            return self.view.notifyError('Sorry, a user with this email already exists.');
                        } else {
                            return self.view.notifyError('Server error, please try again.');
                        }
                    }
                    self.view.notifyError('Sorry, something unexpected happened, please try again.');
                } catch (e) {
                    return self.view.notifyError('Server error, please try again.');
                }
            }
        })
    }
}

export interface CakecodesSignupView {
    getSignupInfo(): ISignupInfo;
    getCampaignId(): string;
    notifyMailSent();
    notifyError(message);
}

export interface ISignupInfo {
    name: string;
    email: string;
    user: string;
    event: string;
}