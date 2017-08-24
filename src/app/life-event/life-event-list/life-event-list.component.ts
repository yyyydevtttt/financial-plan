import { Component, OnInit, Input } from '@angular/core';
import { LifeEvent } from "app/shared/services/life-event/life-event";
import { LifeEventService } from "app/shared/services/life-event/life-event.service";
import { Human } from "app/shared/services/family/human";

@Component({
  selector: 'app-life-event-list',
  templateUrl: './life-event-list.component.html',
  styleUrls: ['./life-event-list.component.css']
})
export class LifeEventListComponent implements OnInit {

  @Input()
  family: Human[];
  @Input()
  lifeEvents: LifeEvent[];

  private edit: boolean;
  
  constructor(
    private lifeEventService: LifeEventService
  ) { }

  ngOnInit() {
    this.lifeEvents = this.lifeEventService.list;
    this.edit = false;
  }

  changeEvent() {
    this.edit = false;
  }

  onClick() {
    this.edit = true;
  }

}
