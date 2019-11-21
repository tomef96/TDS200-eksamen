import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRoomPageRoutingModule } from './new-room-routing.module';

import { NewRoomPage } from './new-room.page';
import { RoomListPageModule } from '../room-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewRoomPageRoutingModule,
        RoomListPageModule
    ],
    declarations: [NewRoomPage]
})
export class NewRoomPageModule {}
