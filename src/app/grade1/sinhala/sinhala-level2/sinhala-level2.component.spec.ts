import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaLevel2Component } from './sinhala-level2.component';

describe('SinhalaLevel2Component', () => {
  let component: SinhalaLevel2Component;
  let fixture: ComponentFixture<SinhalaLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
