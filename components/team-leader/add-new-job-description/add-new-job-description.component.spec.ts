import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewJobDescriptionComponent } from './add-new-job-description.component';

describe('AddNewJobDescriptionComponent', () => {
  let component: AddNewJobDescriptionComponent;
  let fixture: ComponentFixture<AddNewJobDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewJobDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewJobDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
