import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.page.html',
    styleUrls: ['./room-list.page.scss']
})
export class RoomListPage implements OnInit {
    @ViewChild(IonContent, null) content: IonContent;

    rooms: Observable<IRoom[]>;

    constructor(private db: AngularFirestore) {
        this.rooms = db.collection('room').valueChanges() as Observable<
            IRoom[]
        >;
    }

    ngOnInit() {}

    scrollToTop() {
        this.content.scrollToTop(400);
    }
}
