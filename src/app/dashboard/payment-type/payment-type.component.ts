import { Component } from '@angular/core';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.scss'
})
export class PaymentTypeComponent {
  constructor(
    private modelPopup : NgbModal
  ){

  }
  tableData = [
    {
      name : "Hari",
      createdDate : Date.now()
    }
  ];
  addPaymentType(){
  const Model =  this.modelPopup.open(AddCategoryComponent,{
      size : 'md'
    })
    Model.componentInstance.popupType = "payment";
  }
  editRow(index:Number){
    
  }
  deleteRow(index:Number){

  }
}
