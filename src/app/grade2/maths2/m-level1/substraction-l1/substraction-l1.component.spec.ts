import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractionL1Component } from './substraction-l1.component';

describe('SubstractionL1Component', () => {
  let component: SubstractionL1Component;
  let fixture: ComponentFixture<SubstractionL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstractionL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstractionL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
