import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme1LayoutComponent } from './app-engine/themes/bootstrap/theme1-layout/theme1-layout.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from './app-engine/form-elements/input/input.component';
import { IInputConsumerism, InputConsumerService } from './app-engine/form-elements/input-consumer.service';
import { AppEngineComponent } from "./app-engine/app-engine.component";
import { IDataService } from './app-engine/IDataService';
import { FormDataService } from './services/form-data-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Theme1LayoutComponent,
    CommonModule,
    InputComponent,
    AppEngineComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{
    provide: IInputConsumerism,
    useClass: InputConsumerService
  }, {
    provide: IDataService,
    useClass: FormDataService
  }]
})
export class AppComponent {
  title = 'Tour of Themes';
}
