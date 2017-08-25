import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FamilyService } from "app/shared/services/family/family.service";
import { Human } from "app/shared/services/family/human";
import { Relationship } from "app/shared/services/family/relationship";

@Component({
  selector: 'app-family-input',
  templateUrl: './family-input.component.html',
  styleUrls: ['./family-input.component.css']
})
export class FamilyInputComponent implements OnInit {

  private human: Human;
  private family: Human[];
  private relationships: any;

  private husbundFlag: boolean;
  private wifeFlag: boolean;

  constructor(
    private familyService: FamilyService
  ) { }

  ngOnInit() {
    this.relationships = new Relationship().get();
    this.family = this.familyService.list;
    this.setFlag();
  }

  onSubmit(form: NgForm) {
    const human = {
      name: form.value.name,
      relationship: form.value.relationshipList,
      birthday: new Date(form.value.birthday)
    };

    this.familyService.add(human);

    form.reset();
  }

  setFlag() {
    this.husbundFlag = false;
    this.wifeFlag = false;
    if (!(this.family.length === 0)) {
      this.family.forEach(person => {
        if (person.relationship === '0') {
          this.husbundFlag = true;
        } else if (person.relationship === '1') {
          this.wifeFlag = true;
        };
      });
    };
  }

  check(form: NgForm) {
    this.family = this.familyService.list;
    this.setFlag();

    if(this.husbundFlag && form.value.relationshipList === '0') {
      return true;
    }
    if(this.wifeFlag && form.value.relationshipList === '1') {
      return true;
    }
    return false;
  }
 

}
