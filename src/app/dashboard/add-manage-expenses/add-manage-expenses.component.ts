import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-manage-expenses',
  templateUrl: './add-manage-expenses.component.html',
  styleUrl: './add-manage-expenses.component.scss'
})
export class AddManageExpensesComponent {
  addExpensesForm : FormGroup;
  categories = [
    {
      id : "hari",
      title : "hari",
    }
  ];
  constructor(
    private modelPopup: NgbActiveModal,
    private form : FormBuilder
  ) {
    this.addExpensesForm = this.form.group({
      payout : ['',[Validators.required]],
      paymentType : ['',[Validators.required]],
      amount : ['',[Validators.required]],
      notes : ['',[Validators.required]],
    })
  }
  addExpense(){
    console.log("getting form validations",this.addExpensesForm.valid)
  }
  closePopup() {
    this.modelPopup.close();
  }
}
