import { Component, OnInit, Input } from '@angular/core';
import { Human } from "app/shared/services/family/human";
import { FamilyService } from "app/shared/services/family/family.service";
import { Relationship } from "app/shared/services/family/relationship";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-family-update',
  templateUrl: './family-update.component.html',
  styleUrls: ['./family-update.component.css']
})
export class FamilyUpdateComponent implements OnInit {

  @Input()
  private rownum: number;
  @Input()
  private name: string;
  @Input()
  private relationship: string;
  @Input()
  private birthday: Date;

  private human: Human;
  private family: Human[];
  private relationships: any;

  constructor(
    private familyService: FamilyService
  ) { }

  ngOnInit() {
    this.relationships = new Relationship().get();
  }

  private onSubmit(form: NgForm) {
    const human: Human = {
      name: form.value.name,
      relationship: form.value.relationship,
      birthday: new Date(form.value.birthday)
    };

    this.familyService.update(this.rownum, human);

    form.reset();
  }

  public delete() {
    this.familyService.delete(this.rownum);
  }

  private get birthdayFormat() {
    return this.birthday.toISOString().substring(0, 10);
  }

}
