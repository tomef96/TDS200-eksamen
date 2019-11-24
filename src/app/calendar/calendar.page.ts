import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from '../db.service';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss']
})
export class CalendarPage implements OnInit {
    rooms: Observable<IRoom[]>;

    constructor(
        private auth: AngularFireAuth,
        private db: DbService,
        private router: Router
    ) {
        this.rooms = db.subscribeToCalendar();
        console.log('constructor calendar page');
    }

    ngOnInit() {}

    signOut() {
        this.auth.auth.signOut().then(() => this.router.navigate(['/login']));
    }

    navigateToDetail(room: IRoom) {
        this.router.navigate([`/calendar/room-detail/${room.id}`], {
            state: { room }
        });
    }
}
