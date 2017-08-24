import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeEventRoutingModule } from './life-event-routing.module';
import { LifeEventComponent } from "app/life-event/life-event.component";
import { LifeEventDetailComponent } from './life-event-detail/life-event-detail.component';
import { LifeEventInputComponent } from './life-event-input/life-event-input.component';
import { LifeEventListComponent } from './life-event-list/life-event-list.component';
import { LifeEventUpdateComponent } from './life-event-update/life-event-update.component';
import { FamilyAlertComponent } from './family-alert/family-alert.component';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { LifeEventService } from "app/shared/services/life-event/life-event.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LifeEventRoutingModule
  ],
  providers: [LifeEventService],
  declarations: [LifeEventComponent, LifeEventDetailComponent, LifeEventInputComponent, LifeEventListComponent, LifeEventUpdateComponent, FamilyAlertComponent]
})
export class LifeEventModule { }
