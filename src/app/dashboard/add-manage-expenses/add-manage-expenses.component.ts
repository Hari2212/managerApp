import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApicallsService } from '../services/apicalls.service';

@Component({
  selector: 'app-add-manage-expenses',
  templateUrl: './add-manage-expenses.component.html',
  styleUrl: './add-manage-expenses.component.scss'
})
export class AddManageExpensesComponent {
  @Input() popupType: any;
  @Input() content: any;
  addExpensesForm: FormGroup;
  paymentTypes: any;
  payouts: any;
  buttonName = "Add Expenses";
  constructor(
    private modelPopup: NgbActiveModal,
    private form: FormBuilder,
    private apiCalls: ApicallsService
  ) {
    this.addExpensesForm = this.form.group({
      payout: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      notes: ['', [Validators.required]],
    })
  }
  ngOnInit() {
    this.fetchPayoutDetails();
    this.fetchPaymnetTypeDetails();
    if (this.popupType == "edit") {
      this.buttonName = "Update Expenses";
      this.addExpensesForm = this.form.group({
        payout: [this.content.payOutData._id, [Validators.required]],
        paymentType: [this.content.paymentTypes._id, [Validators.required]],
        amount: [this.content.amount, [Validators.required]],
        notes: [this.content.notes, [Validators.required]],
      })
    }
  }
  fetchPayoutDetails() {
    this.apiCalls.getAllExpenditures()
      .subscribe(x => {
        this.payouts = x.res;
        console.log("Printing x", x.res)
      })
  }
  fetchPaymnetTypeDetails() {
    this.apiCalls.getAllPayment()
      .subscribe(x => {
        this.paymentTypes = x.res;
      })
  }
  addExpense() {
    if (this.addExpensesForm.invalid) {
      this.addExpensesForm.markAllAsTouched();
      return;
    }
    if (this.addExpensesForm.valid) {
      if (this.popupType == "edit") {
        this.apiCalls.updateExpenses(this.addExpensesForm.get('amount')?.value, this.addExpensesForm.get('notes')?.value, this.addExpensesForm.get('paymentType')?.value, this.addExpensesForm.get('payout')?.value, this.content._id)
          .subscribe(x => {
            console.log("Prinitnf expenses", x)
            this.modelPopup.close(true);
          })
        return;
      }
      this.apiCalls.addExpenses(this.addExpensesForm.get('amount')?.value, this.addExpensesForm.get('notes')?.value, this.addExpensesForm.get('paymentType')?.value, this.addExpensesForm.get('payout')?.value)
        .subscribe(x => {
          // console.log("Prinitng after adding expenses",x)
          this.modelPopup.close(true);
        })
    }
    // console.log("getting form validations", this.addExpensesForm.valid)
  }
  closePopup() {
    this.modelPopup.close();
  }
}
