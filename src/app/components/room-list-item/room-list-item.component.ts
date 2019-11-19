import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-room-list-item',
    templateUrl: './room-list-item.component.html',
    styleUrls: ['./room-list-item.component.scss']
})
export class RoomListItemComponent implements OnInit {
    @Input() room: any;

    constructor() {}

    ngOnInit() {}
}

/*<ion-item>
<ion-card>
<ion-img
src="https://www.mycommunityspace.org.uk/wp-content/uploads/job-manager-uploads/main_image/2018/04/Astor1-1-1200x800.jpg"
    ></ion-img>
    <ion-card-header>
    <ion-card-subtitle>Grünerløkka</ion-card-subtitle>
    <ion-card-title>Stort rom med skjerm</ion-card-title>
</ion-card-header>

<ion-card-content
style="display: flex; flex-direction: row; justify-content: space-between"
    >
    <ion-label>$$$</ion-label>
    <ion-label>
    09:00-17:00
</ion-label>
</ion-card-content>
</ion-card>
</ion-item>*/
