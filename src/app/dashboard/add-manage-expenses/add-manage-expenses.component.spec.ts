import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManageExpensesComponent } from './add-manage-expenses.component';

describe('AddManageExpensesComponent', () => {
  let component: AddManageExpensesComponent;
  let fixture: ComponentFixture<AddManageExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddManageExpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddManageExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
