import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachToursComponent } from './beach-tours.component';

describe('BeachToursComponent', () => {
  let component: BeachToursComponent;
  let fixture: ComponentFixture<BeachToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeachToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
