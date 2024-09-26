import { Component, OnInit } from '@angular/core';
import { ComplexLayout } from '../../Layout';
import { InputComponent } from '../../../form-elements/input/input.component';
import { IDataService } from '../../../IDataService';

@Component({
  selector: 'app-theme2-layout1',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './theme2-layout1.component.html',
  styleUrl: './theme2-layout1.component.scss'
})
export class Theme2Layout1Component extends ComplexLayout implements OnInit {
  content: any;

  constructor(private dataService: IDataService) {
      super();
  }

  ngOnInit() {
    this.dataService.data$.subscribe(data => {
      this.content = data;
    })
  }
}
