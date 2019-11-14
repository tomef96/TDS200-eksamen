import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
    email = '';
    password = '';

    error: string = null;
    loading = false;

    constructor(private fireAuth: AngularFireAuth, private router: Router) {}

    ngOnInit() {}

    tryLogin(email, password) {
        this.loading = true;
        this.fireAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.router.navigate(['home']);
            })
            .catch(e => {
                this.setError(e.message);
                this.loading = false;
            });
    }

    authenticate(email: string, password: string) {
        if ([email, password].some(i => i.length < 1)) {
            this.setError('Please fill out all fields');
        } else {
            console.log(email);
            console.log(password);
            this.tryLogin(email, password);
        }
    }

    setError(error: string) {
        this.error = error;
        setTimeout(() => (this.error = null), 2000);
    }
}
