import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1LayoutComponent } from './theme1-layout.component';

describe('Theme1LayoutComponent', () => {
  let component: Theme1LayoutComponent;
  let fixture: ComponentFixture<Theme1LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Theme1LayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Theme1LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
