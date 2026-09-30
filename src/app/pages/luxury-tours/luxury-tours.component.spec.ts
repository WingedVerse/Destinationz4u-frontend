import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryToursComponent } from './luxury-tours.component';

describe('LuxuryToursComponent', () => {
  let component: LuxuryToursComponent;
  let fixture: ComponentFixture<LuxuryToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxuryToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxuryToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
