import md5 from 'md5';

export default class ResetPasswordController {
    view: ResetPasswordView;

    constructor(view: ResetPasswordView) {
        this.view = view;
    }

    public execute() {
        var newPassword = this.view.getNewPassword();
        var confirmedPassword = this.view.getConfirmedPassword();
        if (!newPassword) {
            this.view.notifyError('Please enter new password');
            return;
        }
        if (!confirmedPassword) {
            this.view.notifyError('Please confirm your password');
            return;
        }
        if (newPassword !== confirmedPassword) {
            this.view.notifyError('Confirmed password not matched');
            return;
        }

        newPassword = md5(newPassword);
        confirmedPassword = md5(confirmedPassword);
        console.log('newPassword md5', newPassword);

        var token = this.view.getToken();

        var self = this; //760d094c1b424d9d9815e5b5ccd68d6d
        $.ajax({
            url: 'https://cas.unseen.is/api/v1/reset.password',
            type: 'POST',
            data: {id: '760d094c1b424d9d9815e5b5ccd68d6d', token: token, newPassword: newPassword, confirmPassword: confirmedPassword},
            success: function (data) {
                console.log('data', data);
                self.view.notifySuccess();
            },
            error: function(err) {
                console.log('data', err.responseJSON);
                if (err.responseJSON.error.code === 'Error.Account1Service.Account1.INVALID_APPLICATION_ID') {
                    return self.view.notifyError('Sorry, there was an error, please try again.');    
                }
                if (err.responseJSON.error.code === 'Error.Account1Service.Account1.INVALID_TOKEN') {
                    return self.view.notifyError('Token has expired, please try again');  
                }
                self.view.notifyError('Sorry, there was an error, please try again.');
            }
        })
    }
}

export interface ResetPasswordView {
    getNewPassword(): string;
    getConfirmedPassword(): string;
    notifyError(message);
    notifySuccess();
    getToken(): string;
}