import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from "app/family/family.component";
import { FamilyDetailComponent } from './family-detail/family-detail.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyInputComponent } from './family-input/family-input.component';
import { FamilyUpdateComponent } from './family-update/family-update.component';
import { SharedModule } from "app/shared/shared.module";
// import { FamilyService } from "app/family/family.service";

@NgModule({
  imports: [
    CommonModule,
    FamilyRoutingModule,
    FormsModule,
    SharedModule
  ],
  // providers: [FamilyService],
  declarations: [FamilyComponent, FamilyDetailComponent, FamilyListComponent, FamilyInputComponent, FamilyUpdateComponent]
})
export class FamilyModule { }
