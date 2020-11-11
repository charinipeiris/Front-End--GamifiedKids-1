import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELevel1Component } from './e-level1.component';

describe('ELevel1Component', () => {
  let component: ELevel1Component;
  let fixture: ComponentFixture<ELevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
