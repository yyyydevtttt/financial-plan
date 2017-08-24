import { Component, OnInit } from '@angular/core';
import { Human } from "app/shared/services/family/human";
import { FamilyService } from "app/shared/services/family/family.service";
import { LifeEventService } from "app/shared/services/life-event/life-event.service";
import { LifeEvent } from "app/shared/services/life-event/life-event";

@Component({
  selector: 'app-life-event',
  templateUrl: './life-event.component.html',
  styleUrls: ['./life-event.component.css']
})
export class LifeEventComponent implements OnInit {

  private family: Human[];
  private lifeEvent: LifeEvent[];

  constructor(
    private familyService: FamilyService,
    private lifeEventService: LifeEventService
  ) { }

  ngOnInit() {
    this.family = this.familyService.list;
    this.lifeEvent = this.lifeEventService.list;
  }

  isFamilyEmpty() {
    return this.family.length === 0 ? true : false;
  }

}
