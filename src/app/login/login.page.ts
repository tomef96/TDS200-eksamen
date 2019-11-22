import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastController } from '@ionic/angular';

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
        private toastController: ToastController
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
                this.presentError(error.message);
                // this.setError(error.message);
                this.loading = false;
            });
    }

    authenticate(email: string, password: string) {
        if ([email, password].some(i => i.length < 1)) {
            this.presentError('Please fill out all fields');
            // this.setError('Please fill out all fields');
        } else {
            console.log(email);
            console.log(password);
            this.tryLogin(email, password);
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
