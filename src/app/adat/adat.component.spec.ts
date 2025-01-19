import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatComponent } from './adat.component';

describe('AdatComponent', () => {
  let component: AdatComponent;
  let fixture: ComponentFixture<AdatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
