import { Component, OnInit } from '@angular/core';
import { Theme1LayoutComponent } from "./themes/bootstrap/theme1-layout/theme1-layout.component";
import { CommonModule } from '@angular/common';
import { Theme2Layout1Component } from "./themes/bootstrap/theme2-layout1/theme2-layout1.component";
import { IDataService } from './IDataService';

@Component({
  selector: 'app-engine',
  standalone: true,
  imports: [
    CommonModule,
    Theme1LayoutComponent,
    Theme2Layout1Component
],
  templateUrl: './app-engine.component.html',
  styleUrl: './app-engine.component.scss'
})
export class AppEngineComponent implements OnInit {

  logging: [string?] = [];
  get logAsString() {
    // console.log(this.logging.join("\n"));
    return this.logging.join("\n");
  }

  constructor(private myService: IDataService) {

  }

  getEvent(event: any) {
    this.logging.push(event);
  }

  setAppId(appId: number) {
    this.myService.setData(appId);
  }

  template: string = "";
  chooseBootstrap() {
    this.template = "bootstrap";
  }

  chooseOther() {
    this.template = "other";
  }

  ngOnInit() {
    this.myService.setData(1);
  }
}
