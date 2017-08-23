import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationshipPipe } from './pipes/relationship.pipe';
import { IncomeService } from "app/shared/services/income/income.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RelationshipPipe
  ],
  declarations: [RelationshipPipe]
})
export class SharedModule { }
