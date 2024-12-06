import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-expenditure',
  templateUrl: './add-expenditure.component.html',
  styleUrl: './add-expenditure.component.scss'
})
export class AddExpenditureComponent {
  addExpenditureForm : FormGroup;
  categories = [
    {
      title : "hari",
      id : "hari"
    }
  ]
  constructor( 
    private formBuilder : FormBuilder,
    private popup : NgbActiveModal
  ) {
    this.addExpenditureForm = formBuilder.group({
      category : ['',[Validators.required]],
      subCategory : ['',[Validators.required]],
      expenditureTitle : ['',[Validators.required]]
    })
  }

  addExpenditure(){
    console.log("Printing Works",this.addExpenditureForm.valid)
  }
  closePopup(){
    this.popup.close();
  }
}
