import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { DbService } from '../db.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.page.html',
    styleUrls: ['./room-list.page.scss']
})
export class RoomListPage implements OnInit {
    @ViewChild(IonContent, null) content: IonContent;

    date: Date;

    location: string;

    rooms: Observable<IRoom[]>;

    constructor(
        private db: DbService,
        private router: Router,
        private locationService: LocationService
    ) {
        console.log('constructor room-list page');
        this.date = new Date();
        this.rooms = db.subscribeToRooms();

        locationService.getLocation().then(loc => {
            this.location = `${loc.address.city_district}, ${loc.address.city}`;
        });
    }

    ngOnInit() {}

    scrollToTop() {
        this.content.scrollToTop(400);
    }

    navigateToDetail(room: IRoom) {
        this.router.navigate([`/room-list/room-detail/${room.id}`], {
            state: { room }
        });
    }
}
