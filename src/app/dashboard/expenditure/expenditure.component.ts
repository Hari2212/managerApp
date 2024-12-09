import { Component } from '@angular/core';
import { AddExpenditureComponent } from '../add-expenditure/add-expenditure.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApicallsService } from '../services/apicalls.service';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';
import { CantDeleteAlertComponent } from '../cant-delete-alert/cant-delete-alert.component';
@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrl: './expenditure.component.scss'
})
export class ExpenditureComponent {
  constructor(
    private modalPopup: NgbModal,
    private apiCalls: ApicallsService
  ) {

  }
  tableData: any = [];

  ngOnInit() {
    this.fetchDetails();
  }
  fetchDetails() {
    this.apiCalls.getAllExpenditures()
      .subscribe(x => {
        this.tableData = x.res;
        console.log("getting expentureData", x)
      })
  }
  addExpenditure() {
    const Model = this.modalPopup.open(AddExpenditureComponent, {
      size: 'md'
    })
    Model.result.then(x => {
      if (x) {
        this.fetchDetails();
      }
    })
  }
  editRow(content:any) {
    const Model = this.modalPopup.open(AddExpenditureComponent, {
      size: 'md'
    })
    Model.componentInstance.popupType = "edit";
    Model.componentInstance.content = content;
    Model.result.then(x => {
      if (x) {
        this.fetchDetails();
      }
    })
  }
  deleteRow(content: any) {
    const model = this.modalPopup.open(DeleteAlertComponent, { size: 'md' })
    model.result.then(r => {
      if(r){
        this.apiCalls.deleteExpenditures(content._id)
        .subscribe(x => {
          console.log("Printing delete response",x)
          if(x.res == 0){
            const popup = this.modalPopup.open(CantDeleteAlertComponent,{size : 'md'})
            popup.componentInstance.content = "Expenses contains payment type data not able to delete!!!";
          }
          this.fetchDetails();
        })
      }
    })
  }
}
