import { Component } from '@angular/core';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApicallsService } from '../services/apicalls.service';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';
import { CantDeleteAlertComponent } from '../cant-delete-alert/cant-delete-alert.component';
@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.scss'
})
export class PaymentTypeComponent {
  constructor(
    private modalPopup: NgbModal,
    private apiService: ApicallsService
  ) {

  }
  tableData: any;
  ngOnInit() {
    this.fetchDetails();
  }
  fetchDetails() {
    this.apiService.getAllPayment()
      .subscribe(x => {
        this.tableData = x.res;
        console.log("Printing all payments data", x)
      })
  }
  addPaymentType() {
    const Model = this.modalPopup.open(AddCategoryComponent, {
      size: 'md'
    })
    Model.componentInstance.popupType = "payment";
    Model.result.then(x => {
      if (x) {
        this.fetchDetails();
      }
    })
  }
  editRow(row: any) {
    const Model = this.modalPopup.open(AddCategoryComponent, {
      size: 'md'
    })
    Model.componentInstance.popupType = "payment";
    Model.componentInstance.popupOpen = "edit";
    Model.componentInstance.content = row;
    Model.result.then(x => {
      if (x) {
        this.fetchDetails();
      }
    })

  }
  deleteRow(content:any) {
    const model = this.modalPopup.open(DeleteAlertComponent, { size: 'md' })
    model.result.then(r => {
      if(r){
        this.apiService.deletePayment(content._id)
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
