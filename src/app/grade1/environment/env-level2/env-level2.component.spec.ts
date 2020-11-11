import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvLevel2Component } from './env-level2.component';

describe('EnvLevel2Component', () => {
  let component: EnvLevel2Component;
  let fixture: ComponentFixture<EnvLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
