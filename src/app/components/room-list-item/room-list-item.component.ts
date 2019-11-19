import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-room-list-item',
    templateUrl: './room-list-item.component.html',
    styleUrls: ['./room-list-item.component.scss']
})
export class RoomListItemComponent implements OnInit {
    @Input() room: IRoom;

    constructor() {}

    ngOnInit() {
        this.room.availableStart = new Date(
            this.room.availableStart.toDate()
        ).getHours();
        this.room.availableEnd = new Date(
            this.room.availableEnd.toDate()
        ).getHours();
    }
}
