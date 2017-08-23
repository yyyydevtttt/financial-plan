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

  constructor(
    private familyService: FamilyService
  ) { }

  ngOnInit() {
    this.relationships = new Relationship().get()
  }

  onSubmit(form: NgForm) {
    const human = {
      name: form.value.name,
      relationship: form.value.relationship,
      birthday: new Date(form.value.birthday)
    };

    this.familyService.add(human);

    form.reset();
  }


}
