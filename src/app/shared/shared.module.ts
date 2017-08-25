import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationshipPipe } from './pipes/relationship.pipe';
import { IncomeService } from "app/shared/services/income/income.service";
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RelationshipPipe,
    PageHeaderComponent
  ],
  declarations: [RelationshipPipe, PageHeaderComponent]
})
export class SharedModule { }
