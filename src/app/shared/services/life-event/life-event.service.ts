import { Injectable } from '@angular/core';
import { LifeEvent } from "app/shared/services/life-event/life-event";
import { Human } from "app/shared/services/family/human";

@Injectable()
export class LifeEventService {

  private static localStorageKey: string = 'event';
  private lifeEvents: LifeEvent[];

  constructor() {
    let event = localStorage.getItem('event');
    this.lifeEvents = event ? JSON.parse(event): [];
  }

  add(lifeEvent: LifeEvent): void {
    this.lifeEvents.push(lifeEvent);
    localStorage.setItem(LifeEventService.localStorageKey, JSON.stringify(this.lifeEvents));
  }

  update(i: number, lifeEvent: LifeEvent): void {
    this.lifeEvents[i] = lifeEvent;
    localStorage.setItem(LifeEventService.localStorageKey, JSON.stringify(this.lifeEvents));
  }

  get list(): LifeEvent[] {
    return this.lifeEvents;
  }

  public delete(i: number): void {
    this.lifeEvents.splice(i, 1);
    localStorage.setItem(LifeEventService.localStorageKey, JSON.stringify(this.lifeEvents));
  }


}
