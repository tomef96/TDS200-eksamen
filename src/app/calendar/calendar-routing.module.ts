import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarPage } from './calendar.page';

const routes: Routes = [
    {
        path: '',
        component: CalendarPage
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
export class CalendarPageRoutingModule {}
