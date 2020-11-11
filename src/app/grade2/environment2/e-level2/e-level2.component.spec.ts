import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELevel2Component } from './e-level2.component';

describe('ELevel2Component', () => {
  let component: ELevel2Component;
  let fixture: ComponentFixture<ELevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
