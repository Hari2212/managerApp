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
  addCategoryForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private model: NgbActiveModal,
    private apiService: ApicallsService
  ) {
    this.addCategoryForm = this.formBuilder.group({
      categoryTitle: ['', [Validators.required]]
    })
  }
  buttonName = 'Add Category';
  placeholdername: any;
  title: any;
  ngOnInit() {
    if (this.popupType == "payment") {
      this.placeholdername = "Payment title";
      this.title = "Payment Type";
    } else {
      this.placeholdername = "Category title";
      this.title = "Category";
    }
    if(this.popupOpen == "edit"){
      this.buttonName = "Update Category";
      this.addCategoryForm = this.formBuilder.group({
        categoryTitle: [this.content['title'], [Validators.required]]
      })

    }
  }
  userId : any;
  addCategory() {
    this.userId = localStorage.getItem('userId');
    if (this.addCategoryForm.valid) {
      if(this.popupOpen == "edit"){
        
        this.apiService.updateCategory(this.content['_id'],this.userId,this.addCategoryForm.get('categoryTitle')?.value)
        .subscribe(x => {
          this.model.close(true);
        })
        return;
      }
      
      this.apiService.addCategory(this.addCategoryForm.get('categoryTitle')?.value,this.userId)
        .subscribe(x => {
          this.model.close(true);
        })
    }
  }
  closePopup() {
    this.model.close(false);
  }
}
