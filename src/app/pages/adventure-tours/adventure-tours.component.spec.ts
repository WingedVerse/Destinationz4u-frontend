import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureToursComponent } from './adventure-tours.component';

describe('AdventureToursComponent', () => {
  let component: AdventureToursComponent;
  let fixture: ComponentFixture<AdventureToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
