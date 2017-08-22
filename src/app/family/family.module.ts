import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from "app/family/family.component";

@NgModule({
  imports: [
    CommonModule,
    FamilyRoutingModule,
    FormsModule
  ],
  declarations: [FamilyComponent]
})
export class FamilyModule { }
