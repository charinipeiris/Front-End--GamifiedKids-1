import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolGameComponent } from './school-game.component';

describe('SchoolGameComponent', () => {
  let component: SchoolGameComponent;
  let fixture: ComponentFixture<SchoolGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
