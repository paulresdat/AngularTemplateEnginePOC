import { CommonModule, NgFor } from '@angular/common';
import { Attribute, Component, Input } from '@angular/core';
import { InputConsumerService } from '../input-consumer.service';
import { IInputValue } from '../IInputDto';

export abstract class InputComponentBase {
  abstract parentClick: (value: any) => void;
  abstract parentBlur: (value: any) => void;
  abstract parentChange: (value: any) => void;
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements InputComponentBase {
  classes: string[] = [];
  dataAttributes: string[] = [];
  inputType: string = "";
  inputValues: IInputValue[] = [];
  label: string = "";
  name: string = "";

  @Input() 
  set data(value: any) {
    var siftedThrough = this.consumer.consume(value);
    this.classes = siftedThrough.classes;
    this.dataAttributes = siftedThrough.dataAttributes;
    this.inputType = siftedThrough.inputType;
    this.inputValues = siftedThrough.inputValues;
    this.label = siftedThrough.label;
    this.name = siftedThrough.name;
  }

  @Input() parentClick: (value: any) => void = () => { };
  @Input() parentBlur: (value: any) => void = () => { };
  @Input() parentChange: (value: any) => void = () => { };

  constructor(
    @Attribute('theme') public theme: string,
    public consumer: InputConsumerService) {
  }
}
