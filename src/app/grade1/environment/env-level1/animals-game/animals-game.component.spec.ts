import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsGameComponent } from './animals-game.component';

describe('AnimalsGameComponent', () => {
  let component: AnimalsGameComponent;
  let fixture: ComponentFixture<AnimalsGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
