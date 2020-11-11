import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesL1Component } from './shapes-l1.component';

describe('ShapesL1Component', () => {
  let component: ShapesL1Component;
  let fixture: ComponentFixture<ShapesL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
