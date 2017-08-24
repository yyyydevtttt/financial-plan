import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Human } from "app/shared/services/family/human";
import { LifeEvent } from "app/shared/services/life-event/life-event";
import { NgForm } from "@angular/forms";
import { FamilyService } from "app/shared/services/family/family.service";
import { LifeEventService } from "app/shared/services/life-event/life-event.service";

@Component({
  selector: 'app-life-event-update',
  templateUrl: './life-event-update.component.html',
  styleUrls: ['./life-event-update.component.css']
})
export class LifeEventUpdateComponent implements OnInit {

  @Input()
  private rownum: number;
  @Input()
  private family: Human[];
  @Input()
  private event: LifeEvent;
  @Output()
  submitLifeEvent = new EventEmitter<LifeEvent>();
  // submitLifeEvent: EventEmitter<LifeEvent>;
  
  constructor(
    private familyService: FamilyService,
    private lifeEventService: LifeEventService
  ) { }

  ngOnInit() {
    // this.submitLifeEvent = new EventEmitter<LifeEvent>();
  }

  onSubmit(form: NgForm) {
    const lifeEvent = {
      year: form.value.year,
      person: form.value.familyPerson,
      event: form.value.event,
      money: form.value.money
    };

    // this.familyService.update(this.rownum, form.value.person);
    this.lifeEventService.update(this.rownum, lifeEvent);

    form.reset();
    this.submitLifeEvent.emit();
  }

  delete() {
    this.lifeEventService.delete(this.rownum);
    this.submitLifeEvent.emit();
  }

}
