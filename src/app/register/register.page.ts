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
                this.error = e.message;
                this.loading = false;
            });
    }

    authenticate(
        email: string,
        password: string,
        passwordConfirmation: string
    ) {
        if ([email, password, passwordConfirmation].some(i => i.length < 1)) {
            console.log('Missing input');
        } else if (password === passwordConfirmation) {
            console.log(email);
            console.log(password);
            console.log(passwordConfirmation);
            this.tryRegisterAndLogin(email, password);
        } else {
            console.log('Passwords does not match');
            this.error = 'Passwords does not match';
        }
    }
}
