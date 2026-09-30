import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainToursComponent } from './mountain-tours.component';

describe('MountainToursComponent', () => {
  let component: MountainToursComponent;
  let fixture: ComponentFixture<MountainToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountainToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountainToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
