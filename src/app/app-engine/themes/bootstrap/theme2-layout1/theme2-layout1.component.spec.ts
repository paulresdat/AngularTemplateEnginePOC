import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme2Layout1Component } from './theme2-layout1.component';

describe('Theme2Layout1Component', () => {
  let component: Theme2Layout1Component;
  let fixture: ComponentFixture<Theme2Layout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Theme2Layout1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Theme2Layout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
