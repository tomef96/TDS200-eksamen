import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomListPageRoutingModule } from './room-list-routing.module';

import { RoomListPage } from './room-list.page';
import { RoomListItemComponent } from '../components/room-list-item/room-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RoomListPageRoutingModule
    ],
    declarations: [RoomListPage, RoomListItemComponent]
})
export class RoomListPageModule {}
