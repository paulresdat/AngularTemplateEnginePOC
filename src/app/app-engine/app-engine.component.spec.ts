import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEngineComponent } from './app-engine.component';

describe('AppEngineComponent', () => {
  let component: AppEngineComponent;
  let fixture: ComponentFixture<AppEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEngineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
