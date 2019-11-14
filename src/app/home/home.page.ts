import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    constructor(private db: AngularFirestore) {
        const test = db.collection('test').valueChanges();
        test.subscribe(console.log);
    }
}
