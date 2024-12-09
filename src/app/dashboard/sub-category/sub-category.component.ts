import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddsubCategoryComponent } from '../addsub-category/addsub-category.component';
import { ApicallsService } from '../services/apicalls.service';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';
import { CantDeleteAlertComponent } from '../cant-delete-alert/cant-delete-alert.component';
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
    this.apiService.getAllSubCategory()
      .subscribe(x => {
        this.tableData = x.res;
      })
  }

  addSubCategory() {
    const model = this.modalPopup.open(AddsubCategoryComponent, { size: 'md' })
    model.result.then(x => {
      if (x == true) {
        this.fetchDetails();
      }
    })
  }
  editRow(y: any) {
    const model = this.modalPopup.open(AddsubCategoryComponent, { size: 'md' })
    model.componentInstance.popupType = "edit";
    model.componentInstance.content = y;
    model.result.then(x => {
      if (x == true) {
        this.fetchDetails();
      }
    })
  }
  deleteRow(content:any) {
    const model = this.modalPopup.open(DeleteAlertComponent, { size: 'md' })
    model.result.then(r => {
      if(r){
        this.apiService.deleteSubCategory(content._id)
        .subscribe(d => {
          console.log("Printing delete response",d)
          if(d.res == 0){
            const popup = this.modalPopup.open(CantDeleteAlertComponent,{size : 'md'})
            popup.componentInstance.content = "Sub-Category contains expenditures data not able to delete!!!";
          }
          this.fetchDetails();
        })
      }
    })
  }
}
