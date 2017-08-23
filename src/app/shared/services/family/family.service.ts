import { Injectable } from '@angular/core';
import { Human } from "app/shared/services/family/human";

@Injectable()
export class FamilyService {

  private familyList: Human[];

  constructor() {
    this.familyList = [];
  }

  public add(human: Human): void {
    this.familyList.push(human);
  }

  get list(): Human[] {
    return this.familyList;
  }

  public update(i: number, human: Human): void {
    this.familyList[i] = human;
  }

  public delete(i: number): void {
    this.familyList.splice(i, 1);
  }

}
