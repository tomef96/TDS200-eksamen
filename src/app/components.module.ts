import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RoomListItemComponent } from './components/room-list-item/room-list-item.component';
import { DisplayDatePipe } from './pipes/display-date.pipe';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

const components = [RoomListItemComponent, ProgressBarComponent];

const pipes = [DisplayDatePipe];

@NgModule({
    imports: [IonicModule, CommonModule],
    declarations: [...components, ...pipes],
    exports: [...components, ...pipes]
})
export class ComponentsModule {}
