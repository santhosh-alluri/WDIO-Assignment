export class HomePage {

    signin_button() {
        return $('.login');
    }

    signin_email() {
        return $('#email')
    }

    signin_password() {
        return $('#passwd');
    }

    submit_button() {
        return $('#SubmitLogin');
    }
}