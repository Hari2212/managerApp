import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddManageExpensesComponent } from '../add-manage-expenses/add-manage-expenses.component';
import { ApicallsService } from '../services/apicalls.service';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';
import { CantDeleteAlertComponent } from '../cant-delete-alert/cant-delete-alert.component';
@Component({
  selector: 'app-manage-expenses',
  templateUrl: './manage-expenses.component.html',
  styleUrl: './manage-expenses.component.scss'
})
export class ManageExpensesComponent {
  dt = this.getCurrentDate();;

  constructor(
    private modelPopup: NgbModal,
    private apiCalls: ApicallsService
  ) {

  }
  selectedFinancialYear = "ALL";
  financialYears = ["2021 - 2022", "2022 - 2023", "2023 - 2024", "2024 - 2025"];
  tableData: any;
  startDate :any;
  endDate :any;
  ngOnInit() {

    this.fetchDetails("ALL", "");
  }
  fetchDetails(type: any, date: any) {
    this.apiCalls.getAllExpenses(type, date)
      .subscribe(x => {
        this.tableData = x.response;
        console.log("prinirng datas", x)
      })
  }
  addExpenses() {
    const model = this.modelPopup.open(AddManageExpensesComponent, {
      size: 'md'
    })
    model.result.then(x => {
      if (x) {
        this.fetchDetails("ALL", "");
      }
    })
  }
  resetFilters() {

  }
  validateDates() {

  }
  editRow(content: any) {
    const model = this.modelPopup.open(AddManageExpensesComponent, {
      size: 'md'
    })
    model.componentInstance.content = content;
    model.componentInstance.popupType = "edit";
    model.result.then(x => {
      if (x) {
        this.fetchDetails("ALL", "");
      }
    })
  }
  deleteRow(content: any) {
    const model = this.modelPopup.open(DeleteAlertComponent, { size: 'md' })
    model.result.then(r => {
      if (r) {
        this.apiCalls.deleteExpenses(content._id)
          .subscribe(x => {

            this.fetchDetails("ALL", "");
          })
      }
    })
  }
  filterByDate() {

  }
  filterByFinancialYear() {
    // const [startYear, endYear] = selectedFinancialYear.split(" - ").map(Number);
    if (this.selectedFinancialYear == 'ALL') {
      this.fetchDetails("ALL", this.selectedFinancialYear)
    } else {
      this.fetchDetails("FY", this.selectedFinancialYear)

    }
  }
  getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  chnagefunction(){
    console.log("Prinitnng date",this.startDate + "*" + this.endDate)
    console.log("Prinitnng date",new Date(this.startDate) > new Date(this.endDate))
    if(new Date(this.startDate) < new Date(this.endDate)){
      this.fetchDetails("SD",this.startDate +"*"+ this.endDate);
    }
    console.log("Priniting evnet",this.startDate)
    console.log("Priniting evnet++",this.endDate)
  }
}
