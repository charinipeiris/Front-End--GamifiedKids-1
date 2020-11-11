import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLevel2Component } from './m-level2.component';

describe('MLevel2Component', () => {
  let component: MLevel2Component;
  let fixture: ComponentFixture<MLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
