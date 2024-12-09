import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApicallsService } from '../services/apicalls.service';

@Component({
  selector: 'app-add-expenditure',
  templateUrl: './add-expenditure.component.html',
  styleUrl: './add-expenditure.component.scss'
})
export class AddExpenditureComponent {
  @Input() popupType: any;
  @Input() content: any;
  addExpenditureForm: FormGroup;
  category: any;
  subCategory: any = [];
  buttonName = "Add Expenditure";
  constructor(
    private formBuilder: FormBuilder,
    private popup: NgbActiveModal,
    private apiCalls: ApicallsService
  ) {
    this.addExpenditureForm = formBuilder.group({
      category: ['', [Validators.required]],
      subCategory: [{ value: '', disable: true }, [Validators.required]],
      expenditureTitle: ['', [Validators.required]]
    })
    this.addExpenditureForm.get('subCategory')?.disable();
  }
  ngOnInit() {
    this.fecthCategory();
    if (this.popupType == "edit") {
      this.buttonName = "Update Expenditure";
      let subCtegory = "No Sub-Category";
      this.fetchSubCategory(this.content.categoryData._id);
      if (this.content.subcategoryData) {
        subCtegory = this.content.subcategoryData._id;
      } else {
        subCtegory = "no";
      }
      console.log("Printing data", this.content._id);
      this.addExpenditureForm = this.formBuilder.group({
        category: [this.content.categoryData._id, [Validators.required]],
        subCategory: [subCtegory, [Validators.required]],
        expenditureTitle: [this.content.title, [Validators.required]]
      })
    }
  }
  fecthCategory() {
    this.apiCalls.getAllCategory()
      .subscribe(x => {
        this.category = x.response
        console.log("Prinitng response", x.response);
        console.log("Prinitng content", this.content);

      })
  }
  changeCategory() {
    this.subCategory = [];
    this.fetchSubCategory(this.addExpenditureForm.get('category')?.value);

  }
  fetchSubCategory(categoryId: any) {
    this.apiCalls.getcategoryBasedSubCategory(categoryId)
      .subscribe(x => {
        this.addExpenditureForm.get('subCategory')?.enable();
        if (x.res.length > 0) {
          this.subCategory = x.res;
        } else {
          this.subCategory.push({ _id: "no", title: "No Sub-Category" })
          console.log("Printing category id", this.subCategory)
        }
      })
  }
  addExpenditure() {
    if (this.addExpenditureForm.invalid) {
      this.addExpenditureForm.markAllAsTouched();
      return;
    }
    if (this.addExpenditureForm.valid) {
      if (this.popupType == "edit") {
        this.apiCalls.updateExpenditures(this.content._id, this.addExpenditureForm.get('category')?.value, this.addExpenditureForm.get('subCategory')?.value, this.addExpenditureForm.get('expenditureTitle')?.value)
          .subscribe(x => {
            this.popup.close(true);
          })
        return;
      }
      if (this.addExpenditureForm.valid) {
        this.apiCalls.addExpenditures(this.addExpenditureForm.get('expenditureTitle')?.value, this.addExpenditureForm.get('category')?.value, this.addExpenditureForm.get('subCategory')?.value)
          .subscribe(x => {
            console.log("Prinitng datas", x);
            this.popup.close(true);
          })
      }
    }
    console.log("Printing Works", this.addExpenditureForm.valid)
  }
  closePopup() {
    this.popup.close(false);
  }
}
