import { Component, OnInit, Input } from '@angular/core';
import { FamilyService } from "app/shared/services/family/family.service";
import { NgForm } from "@angular/forms";
import { LifeEvent } from "app/shared/services/life-event/life-event";
import { Relationship } from "app/shared/services/family/relationship";
import { LifeEventService } from "app/shared/services/life-event/life-event.service";
import { Human } from "app/shared/services/family/human";

@Component({
  selector: 'app-life-event-input',
  templateUrl: './life-event-input.component.html',
  styleUrls: ['./life-event-input.component.css']
})
export class LifeEventInputComponent implements OnInit {

  @Input()
  family: Human[];

  private relationships: any;
  private lifeEvent: LifeEvent;

  constructor(
    private familyService: FamilyService,
    private lifeEventService: LifeEventService
  ) { }

  ngOnInit() {
//    this.relationships = new Relationship().get();
  }

  onSubmit(form: NgForm) {
    const lifeEvent: LifeEvent = {
      year: form.value.year,
      person: form.value.familyPerson,
      event: form.value.event,
      money: form.value.money
    };

    this.lifeEventService.add(lifeEvent);

    form.reset();
  }



}
