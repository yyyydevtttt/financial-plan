import { Component, OnInit } from '@angular/core';
import { Human } from "app/shared/services/family/human";
import { FamilyService } from "app/shared/services/family/family.service";

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  private family: Human[];

  constructor(
    private familyService: FamilyService
  ) { }

  ngOnInit() {
    this.family = this.familyService.list;
  }


}
