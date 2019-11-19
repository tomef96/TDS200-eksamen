import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.page.html',
    styleUrls: ['./room-list.page.scss']
})
export class RoomListPage implements OnInit {
    @ViewChild(IonContent, null) content: IonContent;
    constructor(private db: AngularFirestore) {
        const test = db.collection('test').valueChanges();
        test.subscribe(console.log);
    }

    ngOnInit() {}

    scrollToTop() {
        this.content.scrollToTop(400);
    }
}
