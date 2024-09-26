import { Component, OnInit } from '@angular/core';
import { ComplexLayout } from '../../Layout';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../form-elements/input/input.component';
import { IDataService } from '../../../IDataService';

@Component({
  selector: 'theme1-layout',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './theme1-layout.component.html',
  styleUrl: './theme1-layout.component.scss'
})
export class Theme1LayoutComponent extends ComplexLayout implements OnInit {
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
