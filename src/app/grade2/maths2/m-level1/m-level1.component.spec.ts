import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLevel1Component } from './m-level1.component';

describe('MLevel1Component', () => {
  let component: MLevel1Component;
  let fixture: ComponentFixture<MLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
