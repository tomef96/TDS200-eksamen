import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-room-list-item',
    templateUrl: './room-list-item.component.html',
    styleUrls: ['./room-list-item.component.scss']
})
export class RoomListItemComponent implements OnInit {
    @Input() room: IRoom;

    bookedByUser = false;

    constructor(private auth: AuthService) {
        console.log('constructor room-list-item component');
    }

    ngOnInit() {
        if (this.room.bookedBy === this.auth.currentUser) {
            this.bookedByUser = true;
        }
    }
}
