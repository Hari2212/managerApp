import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApicallsService } from '../services/apicalls.service';

@Component({
  selector: 'app-addsub-category',
  templateUrl: './addsub-category.component.html',
  styleUrl: './addsub-category.component.scss'
})
export class AddsubCategoryComponent {
  categories: any;
  @Input() popupType: any;
  @Input() content: any;
  addCategoryForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private popupClose: NgbActiveModal,
    private apiCalls: ApicallsService
  ) {
    this.addCategoryForm = this.formBuilder.group({
      parentCategory: ['', [Validators.required]],
      subcategoryTitle: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  buttonName = "Add Sub Category";
  ngOnInit() {
    this.fetchDetails();
    if (this.popupType == "edit") {
      this.buttonName = "Update Sub Category";
      this.addCategoryForm = this.formBuilder.group({
        parentCategory: [this.content.categoryData._id, [Validators.required]],
        subcategoryTitle: [this.content.title, [Validators.required, Validators.minLength(3)]]
      })
    }
  }
  userId: any;
  fetchDetails() {
    this.userId = localStorage.getItem('userId');
    this.apiCalls.getAllCategory()
      .subscribe(x => {
        this.categories = x.response;
        console.log("gettoingv data", this.categories)
      })
  }
  closePopup() {
    this.popupClose.close(false);
  }
  addSubCategory() {
    if(this.addCategoryForm.invalid){
      this.addCategoryForm.markAllAsTouched();
      return;
    }
    this.userId = localStorage.getItem('userId');
    if(this.popupType == "edit"){
      this.apiCalls.updateSubCategory(this.content._id,this.addCategoryForm.get('subcategoryTitle')?.value,this.addCategoryForm.get('parentCategory')?.value)
      .subscribe(x => {
        this.popupClose.close(true);
      })
      return;
    }
    // console.log("Printing elemnets",this.addCategoryForm.valid)
    if (this.addCategoryForm.valid) {
      this.apiCalls.addSubCategory(this.addCategoryForm.get('subcategoryTitle')?.value,  this.addCategoryForm.get('parentCategory')?.value)
        .subscribe(x => {
          this.popupClose.close(true);
        })
    }
  }
}
