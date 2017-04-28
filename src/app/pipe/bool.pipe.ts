import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {
  constructor(){}

  transform(value: any, args?: any): any {
    return value==="true"?"真":"假";
  }

}
