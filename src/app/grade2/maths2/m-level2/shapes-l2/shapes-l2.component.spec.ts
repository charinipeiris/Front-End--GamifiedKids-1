import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesL2Component } from './shapes-l2.component';

describe('ShapesL2Component', () => {
  let component: ShapesL2Component;
  let fixture: ComponentFixture<ShapesL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
