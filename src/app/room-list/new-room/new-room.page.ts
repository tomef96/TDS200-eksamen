import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { DbService } from '../../db.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-new-room',
    templateUrl: './new-room.page.html',
    styleUrls: ['./new-room.page.scss']
})
export class NewRoomPage implements OnInit {
    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    room: IRoom;

    camera;

    slider: any;

    constructor(
        private db: DbService,
        private router: Router,
        private toastController: ToastController
    ) {
        this.camera = new Camera();
        this.room = {
            id: null,
            availableEnd: '',
            availableStart: '',
            description: '',
            image: '',
            position: '',
            price: 0,
            booked: false,
            bookedBy: null
        };
    }

    presentError(message: string) {
        this.toastController
            .create({
                message,
                duration: 2000,
                position: 'top',
                color: 'danger'
            })
            .then(toast => toast.present());
    }

    ngOnInit() {
        this.slider = document.getElementById('slider');
        this.slider.lockSwipes(true);
        this.takePicture().then(img => (this.room.image = img));
        console.log();
    }

    takePicture(): Promise<string> {
        return this.camera
            .getPicture({
                destinationType: this.camera.DestinationType.DATA_URL
            })
            .then(b64 => {
                return `data:image/jpeg;base64,${b64}`;
            })
            .catch(e => {
                console.log('Camera issue: ' + e);
                return 'https://venncubed.co.za/backend/wp-content/uploads/2017/10/placeholder.png';
            });
    }

    postRoom() {
        const { availableStart, availableEnd } = this.room;

        const error = Object.keys(this.room).some(key => {
            const value = this.room[key];
            return typeof value === 'string' && value.length < 1;
        });

        if (error) {
            this.presentError('Required fields are not filled');
        } else {
            this.room.availableStart = new Date(availableStart);
            this.room.availableEnd = new Date(availableEnd);
            this.db
                .addRoom(this.room)
                .then(() => {
                    this.router.navigate(['/room-list']);
                })
                .catch(e => this.presentError(e));
        }
    }

    /**
     * This may seem strange, but i don't want the user to be able to change slide by swiping,
     * only by pressing 'Next'.
     */
    goToNextSlide() {
        this.slider.lockSwipes(false).then(() => {
            this.slider.slideNext().then(() => {
                this.slider.lockSwipes(true);
            });
        });
    }

    goToPreviousSlide() {
        this.slider.lockSwipes(false).then(() => {
            this.slider.slidePrev().then(() => {
                this.slider.lockSwipes(true);
            });
        });
    }
}
