import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Utils } from '../utils';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
    email = '';
    password = '';

    loading = false;

    constructor(
        private auth: AuthService,
        private router: Router,
        private utils: Utils
    ) {
        console.log('constructor login page');
    }

    ngOnInit() {}

    tryLogin(email, password) {
        this.loading = true;
        this.auth
            .signIn(email, password)
            .then(() => this.router.navigate(['']))
            .catch(error => {
                this.utils.toast(error.message, 'bottom', 'danger');
            })
            .finally(() => this.resetState());
    }

    authenticate(email: string, password: string) {
        if ([email, password].some(i => i.length < 1)) {
            this.utils.toast('Please fill out all fields', 'bottom', 'danger');
        } else {
            console.log(email);
            console.log(password);
            this.tryLogin(email, password);
        }
    }

    resetState() {
        this.loading = false;
        this.email = '';
        this.password = '';
    }
}
