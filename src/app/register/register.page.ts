import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
        private router: Router,
        private toastController: ToastController
    ) {
        console.log('constructor register page');
    }

    ngOnInit() {}

    tryRegisterAndLogin(email, password) {
        this.loading = true;
        this.fireAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.fireAuth.auth
                    .signInWithEmailAndPassword(email, password)
                    .then(() => {
                        this.router.navigate(['']);
                    });
            })
            .catch(e => {
                this.presentError(e.message);
                this.loading = false;
            });
    }

    authenticate(
        email: string,
        password: string,
        passwordConfirmation: string
    ) {
        if ([email, password, passwordConfirmation].some(i => i.length < 1)) {
            this.presentError('Please fill out all fields');
        } else if (password === passwordConfirmation) {
            this.tryRegisterAndLogin(email, password);
        } else {
            this.presentError('Passwords does not match');
        }
    }

    presentError(message: string) {
        this.toastController
            .create({
                message,
                duration: 2000,
                position: 'bottom',
                color: 'danger'
            })
            .then(toast => toast.present());
    }
}
