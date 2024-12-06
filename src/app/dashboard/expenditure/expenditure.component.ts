import { Component } from '@angular/core';
import { AddExpenditureComponent } from '../add-expenditure/add-expenditure.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrl: './expenditure.component.scss'
})
export class ExpenditureComponent {
  constructor(
    private modalPopup : NgbModal
  ) {

  }
  tableData = [
    {
      category : "hari",
      subCategory : "hari",
      Expenditure : "hari",
      createdDate : Date.now()
    }
  ];
  addExpenditure(){
    this.modalPopup.open(AddExpenditureComponent,{
      size : 'md'
    })
  }
  editRow(index : Number) {
     
  }
  deleteRow(index : Number){
    
  }
}
