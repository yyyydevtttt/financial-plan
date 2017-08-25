import { Injectable } from '@angular/core';
import { Human } from "app/shared/services/family/human";

@Injectable()
export class FamilyService {

  private static localStorageKey: string = 'family';
  private familyList: Human[];

  constructor() {
    let family = localStorage.getItem('family');
    this.familyList = family ? JSON.parse(family): [];
    this.familyList.forEach(value => {
      value.birthday = new Date(value.birthday);
    })
  }

  public add(human: Human): void {
    this.familyList.push(human);
    localStorage.setItem(FamilyService.localStorageKey, JSON.stringify(this.familyList));
  }

  get list(): Human[] {
    return this.familyList;
  }

  public update(i: number, human: Human): void {
    this.familyList[i] = human;
    localStorage.setItem(FamilyService.localStorageKey, JSON.stringify(this.familyList));
  }

  public delete(i: number): void {
    this.familyList.splice(i, 1);
    localStorage.setItem(FamilyService.localStorageKey, JSON.stringify(this.familyList));
  }

}
