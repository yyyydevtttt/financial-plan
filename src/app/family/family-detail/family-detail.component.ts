import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FamilyService } from "app/shared/services/family/family.service";

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: ['./family-detail.component.css']
})
export class FamilyDetailComponent implements OnInit {

  @Input()
  private rownum: number;
  @Input()
  private name: string;
  @Input()
  private relationship: string;
  @Input()
  private birthday: Date;

  private myVar: boolean = false;

  constructor(
    private familyService: FamilyService
  ) { }

  ngOnInit() {
  }
  
  onClick() {
    this.myVar = true;
  }


}
