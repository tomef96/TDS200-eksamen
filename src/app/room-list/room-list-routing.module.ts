import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomListPage } from './room-list.page';

const routes: Routes = [
    {
        path: '',
        component: RoomListPage
    },
    {
        path: 'new-room',
        loadChildren: () =>
            import('./new-room/new-room.module').then(m => m.NewRoomPageModule)
    },
    {
        path: 'room-detail/:id',
        loadChildren: () =>
            import('../room-detail/room-detail.module').then(
                m => m.RoomDetailPageModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoomListPageRoutingModule {}
