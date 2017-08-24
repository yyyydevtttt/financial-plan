import { Component, OnInit, Input } from '@angular/core';
import { FamilyService } from "app/shared/services/family/family.service";
import { Human } from "app/shared/services/family/human";
import { LifeEvent } from "app/shared/services/life-event/life-event";

@Component({
  selector: 'app-life-event-detail',
  templateUrl: './life-event-detail.component.html',
  styleUrls: ['./life-event-detail.component.css']
})
export class LifeEventDetailComponent implements OnInit {

  @Input()
  private family: Human[];
  @Input()
  private event: LifeEvent;
  
  private myVar: boolean = false;
  
  constructor(
    private familyService: FamilyService
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.myVar = true;
  }

  calcAge(year: number, person: Human) {
    // console.log(parseInt(person.birthday.toISOString().substring(0, 4)));
    return year - parseInt(person.birthday.toISOString().substring(0, 4));
  }

}
