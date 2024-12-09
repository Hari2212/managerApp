import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApicallsService } from '../services/apicalls.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  @Input() popupType: String | any;
  @Input() popupOpen: String | any;
  @Input() content: String | any;
  errrMessage : any;
  addCategoryForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private model: NgbActiveModal,
    private apiService: ApicallsService
  ) {
    this.addCategoryForm = this.formBuilder.group({
      title: ['', [Validators.required]]
    })
  }
  buttonName = 'Add Category';
  placeholdername: any;
  title: any;
  ngOnInit() {
    if (this.popupType == "payment") {
      this.errrMessage = "Payment title is required!!!";
      this.placeholdername = "Payment title";
      this.title = "Payment Type";
      if (this.popupOpen == "edit") {
        this.buttonName = "Update Payment";
        this.addCategoryForm = this.formBuilder.group({
          title: [this.content['title'], [Validators.required]]
        })
      }
    } else {
      this.errrMessage = "Category title is required!!!";
      this.placeholdername = "Category title";
      this.title = "Category";
      if (this.popupOpen == "edit") {
        this.buttonName = "Update Category";
        this.addCategoryForm = this.formBuilder.group({
          title: [this.content['title'], [Validators.required]]
        })
      }
    }
  }
  userId: any;
  addCategory() {
    if(this.addCategoryForm.invalid){
      this.addCategoryForm.markAllAsTouched();
      return;
    }
    if (this.popupType == "payment") {
      if (this.addCategoryForm.valid) {
        if (this.popupOpen == "edit") {
          this.apiService.updatePayment(this.content['_id'], this.addCategoryForm.get('title')?.value)
            .subscribe(x => {
              this.model.close(true);
            })
        }else{
          this.apiService.addPayment(this.addCategoryForm.get('title')?.value)
          .subscribe(x => {
            this.model.close(true);
          })
        }
      }
    } else {
      if (this.addCategoryForm.valid) {
        if (this.popupOpen == "edit") {

          this.apiService.updateCategory(this.content['_id'], this.addCategoryForm.get('title')?.value)
            .subscribe(x => {
              this.model.close(true);
            })
          return;
        }

        this.apiService.addCategory(this.addCategoryForm.get('title')?.value)
          .subscribe(x => {
            this.model.close(true);
          })
      }
    }
  }
  closePopup() {
    this.model.close(false);
  }
}
