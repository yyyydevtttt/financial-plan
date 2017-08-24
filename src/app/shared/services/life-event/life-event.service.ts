import { Injectable } from '@angular/core';
import { LifeEvent } from "app/shared/services/life-event/life-event";
import { Human } from "app/shared/services/family/human";

@Injectable()
export class LifeEventService {

  private lifeEvents: LifeEvent[];

  constructor() {
    this.lifeEvents = [];
  }

  add(lifeEvent: LifeEvent): void {
    this.lifeEvents.push(lifeEvent);
  }

  update(i: number, lifeEvent: LifeEvent): void {
    this.lifeEvents[i] = lifeEvent;
  }

  get list(): LifeEvent[] {
    return this.lifeEvents;
  }

  public delete(i: number): void {
    this.lifeEvents.splice(i, 1);
  }


}
