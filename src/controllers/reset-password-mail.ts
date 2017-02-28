

export default class ResetPasswordMailController {
    view: ResetPasswordMailView;
    constructor(view: ResetPasswordMailView) {
        this.view = view;
    }

    public execute() {
        var email = this.view.getEmail();
        console.log('email', email);
        if (!email) {
            this.view.notifyError('Please enter your email');
            return;
        }
        
        var self = this;
        $.ajax({
            url: 'https://cas.unseen.is/api/v1/reset.password.mail',
            type: 'POST',
            data: {id: '760d094c1b424d9d9815e5b5ccd68d6d', email: email},
            success: function (data) {
                console.log('data', data);
                self.view.notifyMailSent();
            },
            error: function(err) {
                console.log('data', err.responseJSON);
                if (err.responseJSON.error.code == 'Error.Account1Service.Account1.ACCOUNT_DOES_NOT_EXIST') {
                    self.view.notifyError('Sorry, we doesn\'t recognize that email.');
                }
            }
        })
    }
}

export interface ResetPasswordMailView {
    getEmail(): string;
    notifyMailSent();
    notifyError(message);
}