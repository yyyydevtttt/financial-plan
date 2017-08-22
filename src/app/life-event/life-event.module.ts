import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeEventRoutingModule } from './life-event-routing.module';
import { LifeEventComponent } from "app/life-event/life-event.component";

@NgModule({
  imports: [
    CommonModule,
    LifeEventRoutingModule
  ],
  declarations: [LifeEventComponent]
})
export class LifeEventModule { }
