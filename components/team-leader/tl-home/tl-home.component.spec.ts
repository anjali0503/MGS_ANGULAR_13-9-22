import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlHomeComponent } from './tl-home.component';

describe('TlHomeComponent', () => {
  let component: TlHomeComponent;
  let fixture: ComponentFixture<TlHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
