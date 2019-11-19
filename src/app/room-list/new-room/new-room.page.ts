import { Component, OnInit } from '@angular/core';

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

    slider: any;

    constructor() {}

    ngOnInit() {
        this.slider = document.getElementById('slider');
        this.slider.lockSwipes(true);
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
