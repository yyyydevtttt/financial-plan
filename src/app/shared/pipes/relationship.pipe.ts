import { Pipe, PipeTransform } from '@angular/core';
import { Relationship } from "app/shared/services/family/relationship";

@Pipe({
  name: 'relationship_value'
})
export class RelationshipPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Relationship().value(value);
  }

}
