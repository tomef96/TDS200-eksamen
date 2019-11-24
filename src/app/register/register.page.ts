import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Utils } from '../utils';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
    email = '';
    password = '';
    passwordConfirmation = '';

    loading = false;

    constructor(
        private fireAuth: AngularFireAuth,
        private authService: AuthService,
        private router: Router,
        private utils: Utils
    ) {}

    ngOnInit() {}

    tryRegisterAndLogin(email, password) {
        this.loading = true;
        this.authService
            .register(email, password)
            .then(() =>
                this.authService
                    .signIn(email, password)
                    .then(() => this.router.navigate(['']))
            )
            .catch(e => {
                this.utils.toast(e.message, 'bottom', 'danger');
            })
            .finally(() => (this.loading = false));
    }

    authenticate(
        email: string,
        password: string,
        passwordConfirmation: string
    ) {
        if ([email, password, passwordConfirmation].some(i => i.length < 1)) {
            this.utils.toast('Please fill out all fields', 'bottom', 'danger');
        } else if (password === passwordConfirmation) {
            this.tryRegisterAndLogin(email, password);
        } else {
            this.utils.toast('Passwords does not match', 'bottom', 'danger');
        }
    }

    resetState() {
        this.loading = false;
        this.email = '';
        this.password = '';
        this.passwordConfirmation = '';
    }
}
