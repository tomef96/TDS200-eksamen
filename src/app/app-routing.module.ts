import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {
    canActivate,
    redirectLoggedInTo,
    redirectUnauthorizedTo
} from '@angular/fire/auth-guard';

const routes: Routes = [
    { path: '', redirectTo: 'room-list', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () =>
            import('./login/login.module').then(m => m.LoginPageModule),
        ...canActivate(redirectLoggedInTo(['']))
    },
    {
        path: 'register',
        loadChildren: () =>
            import('./register/register.module').then(
                m => m.RegisterPageModule
            ),
        ...canActivate(redirectLoggedInTo(['']))
    },
    {
        path: 'calendar',
        loadChildren: () =>
            import('./calendar/calendar.module').then(
                m => m.CalendarPageModule
            ),
        ...canActivate(redirectUnauthorizedTo(['login']))
    },
    {
        path: 'room-list',
        loadChildren: () =>
            import('./room-list/room-list.module').then(
                m => m.RoomListPageModule
            ),
        ...canActivate(redirectUnauthorizedTo(['login']))
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes /*{ preloadingStrategy: PreloadAllModules }*/
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
