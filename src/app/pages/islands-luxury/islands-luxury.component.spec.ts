import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandsLuxuryComponent } from './islands-luxury.component';

describe('IslandsLuxuryComponent', () => {
  let component: IslandsLuxuryComponent;
  let fixture: ComponentFixture<IslandsLuxuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IslandsLuxuryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IslandsLuxuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
