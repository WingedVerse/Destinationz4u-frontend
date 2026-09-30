import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalToursComponent } from './cultural-tours.component';

describe('CulturalToursComponent', () => {
  let component: CulturalToursComponent;
  let fixture: ComponentFixture<CulturalToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
