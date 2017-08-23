import { Component, OnInit } from '@angular/core';
import { Human } from "app/shared/services/family/human";
import { FamilyService } from "app/shared/services/family/family.service";

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit() {
  }


}
