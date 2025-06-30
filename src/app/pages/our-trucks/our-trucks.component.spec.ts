import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTrucksComponent } from './our-trucks.component';

describe('OurTrucksComponent', () => {
  let component: OurTrucksComponent;
  let fixture: ComponentFixture<OurTrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTrucksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
