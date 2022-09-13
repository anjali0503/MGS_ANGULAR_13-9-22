import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobDescrptionComponent } from './all-job-descrption.component';

describe('AllJobDescrptionComponent', () => {
  let component: AllJobDescrptionComponent;
  let fixture: ComponentFixture<AllJobDescrptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllJobDescrptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllJobDescrptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
