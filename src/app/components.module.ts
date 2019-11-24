import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RoomListItemComponent } from './components/room-list-item/room-list-item.component';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FormatDatePipe } from './pipes/format-date.pipe';

const components = [RoomListItemComponent, ProgressBarComponent];

const pipes = [FormatDatePipe];

@NgModule({
    imports: [IonicModule, CommonModule],
    declarations: [...components, ...pipes],
    exports: [...components, ...pipes]
})
export class ComponentsModule {}
