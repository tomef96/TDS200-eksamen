import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
    email = '';
    password = '';
    passwordConfirmation = '';

    error: string = null;
    loading = false;

    constructor(private fireAuth: AngularFireAuth, private router: Router) {}

    ngOnInit() {}

    tryRegisterAndLogin(email, password) {
        this.loading = true;
        this.fireAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.fireAuth.auth
                    .signInWithEmailAndPassword(email, password)
                    .then(() => {
                        this.router.navigate(['home']);
                    });
            })
            .catch(e => {
                this.setError(e.message);
                this.loading = false;
            });
    }

    authenticate(
        email: string,
        password: string,
        passwordConfirmation: string
    ) {
        if ([email, password, passwordConfirmation].some(i => i.length < 1)) {
            this.setError('Please fill out all fields');
        } else if (password === passwordConfirmation) {
            this.tryRegisterAndLogin(email, password);
        } else {
            this.setError('Passwords does not match');
        }
    }

    setError(error: string) {
        this.error = error;
        setTimeout(() => (this.error = null), 2000);
    }
}
