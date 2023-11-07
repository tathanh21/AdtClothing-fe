import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCollectionComponent } from './holiday-collection.component';

describe('HolidayCollectionComponent', () => {
  let component: HolidayCollectionComponent;
  let fixture: ComponentFixture<HolidayCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayCollectionComponent]
    });
    fixture = TestBed.createComponent(HolidayCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
