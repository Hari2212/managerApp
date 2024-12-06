import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddsubCategoryComponent } from '../addsub-category/addsub-category.component';
import { ApicallsService } from '../services/apicalls.service';
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.scss'
})
export class SubCategoryComponent {
  tableData: any;
  constructor(
    private modalPopup: NgbModal,
    private apiService: ApicallsService
    // private modalClose: NgbActiveModal
  ) {

  }
  ngOnInit() {
    this.fetchDetails();
  }
  userId: any;
  fetchDetails() {
    this.userId = localStorage.getItem('userId');
    this.apiService.getAllSubCategory(this.userId)
      .subscribe(x => {
        this.tableData = x.res;
      })
  }

  addSubCategory() {
    this.modalPopup.open(AddsubCategoryComponent, { size: 'md' })
  }
  editRow(y: any) {
    const model = this.modalPopup.open(AddsubCategoryComponent, { size: 'md' })
    model.componentInstance.popupType = "edit";
    model.componentInstance.content = y;
    model.result.then(x=>{
      if(x == true){
        this.fetchDetails();
      }
    })
  }
  deleteRow(index: Number) {

  }
}
