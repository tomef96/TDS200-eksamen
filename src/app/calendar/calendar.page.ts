import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss']
})
export class CalendarPage implements OnInit {
    constructor(private auth: AngularFireAuth) {
        console.log('constructor calendar page');
    }

    ngOnInit() {}

    signOut() {
        this.auth.auth.signOut();
    }
}
