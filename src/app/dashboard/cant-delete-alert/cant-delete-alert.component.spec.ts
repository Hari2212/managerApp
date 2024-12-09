import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantDeleteAlertComponent } from './cant-delete-alert.component';

describe('CantDeleteAlertComponent', () => {
  let component: CantDeleteAlertComponent;
  let fixture: ComponentFixture<CantDeleteAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CantDeleteAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantDeleteAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
