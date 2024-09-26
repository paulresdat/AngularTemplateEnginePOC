import { Injectable } from '@angular/core';
import { IInputDto, InputDto } from './IInputDto';

export abstract class IInputConsumerism {
  abstract consume(data: any): IInputDto;
}

@Injectable({
  providedIn: 'root'
})
export class InputConsumerService implements IInputConsumerism {
  constructor() { }

  public consume(data: any): IInputDto {
    var classes: string[] = [];
    if (data.hasOwnProperty('meta-data')) {
      let listOfObjects = data['meta-data'] as object[];
      for (let l in listOfObjects) {
        let o: any = listOfObjects[l];
        if (o.hasOwnProperty('name') && o['name'] == 'class-name') {
          classes.push(o['value']);
        }
      }
    }
    return new InputDto(
      classes,
      [],
      data['question']
    );
  }
}
