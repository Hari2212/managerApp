import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddManageExpensesComponent } from '../add-manage-expenses/add-manage-expenses.component';
@Component({
  selector: 'app-manage-expenses',
  templateUrl: './manage-expenses.component.html',
  styleUrl: './manage-expenses.component.scss'
})
export class ManageExpensesComponent {
  constructor(
    private modelPopup: NgbModal
  ) {

  }
  selectedFinancialYear = "2023 - 2024";
  financialYears = ["2021 - 2022", "2022 - 2023", "2023 - 2024"];
  tableData = [
    {
      payout: "hari",
      paymentType: "hari",
      amount: "hari",
      notes: 'hari',
      createdDate: Date.now()

    }
  ];
  addExpenses() {
    this.modelPopup.open(AddManageExpensesComponent, {
      size: 'md'
    })
  }
  editRow(index: Number) {

  }
  deleteRow(index: Number) {

  }
  applyFilters() {

  }
}
