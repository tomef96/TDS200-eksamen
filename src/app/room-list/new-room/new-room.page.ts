import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

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

    camera = new Camera();

    image: string;

    slider: any;

    constructor() {}

    ngOnInit() {
        this.slider = document.getElementById('slider');
        this.slider.lockSwipes(true);
        this.takePicture().then(img => (this.image = img));
    }

    takePicture(): Promise<string> {
        return this.camera
            .getPicture()
            .then(b64 => {
                return `data:image/jpeg;base64,${b64}`;
            })
            .catch(e => {
                console.log('Camera issue: ' + e);
                return 'https://venncubed.co.za/backend/wp-content/uploads/2017/10/placeholder.png';
            });
    }

    postRoom() {
        console.log('Create');
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
