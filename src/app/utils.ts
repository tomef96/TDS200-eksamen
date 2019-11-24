import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class Utils {
    constructor(private toastController: ToastController) {}

    toast(message: string, position: string, color: string) {
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
