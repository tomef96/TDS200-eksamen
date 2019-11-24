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
                return null;
            });
    }

    postRoom() {
        const { position, description } = this.room;

        const error = Object.keys({ position, description }).some(key => {
            const value = this.room[key];
            return value.length < 1;
        });

        if (error) {
            this.presentError('Required fields are not filled');
        } else {
            const postingRoom = { ...this.room };
            postingRoom.availableStart = new Date(postingRoom.availableStart);
            postingRoom.availableEnd = new Date(postingRoom.availableEnd);
            this.db
                .addRoom(postingRoom)
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
