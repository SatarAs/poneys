import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRaceReactiveComponent } from './add-race.component';

describe('AddRaceComponent', () => {
  let component: AddRaceReactiveComponent;
  let fixture: ComponentFixture<AddRaceReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRaceReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRaceReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
