import { Component } from '@angular/core';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApicallsService } from '../services/apicalls.service';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';
import { CantDeleteAlertComponent } from '../cant-delete-alert/cant-delete-alert.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  tableData = [];

  constructor(
    private model: NgbModal,
    private apiService: ApicallsService
  ) {

  }
  userId: any;
  ngOnInit() {
    this.fetchDetails();
  }
  fetchDetails() {
    this.userId = localStorage.getItem('userId');
    this.apiService.getAllCategory()
      .subscribe(x => {
        console.log("Get Api data", x)
        this.tableData = x.response;
      })
  }
  editRow(obj: any) {
    const Model = this.model.open(AddCategoryComponent, {
      size: 'md'
    });
    Model.componentInstance.popupType = "category";
    Model.componentInstance.popupOpen = "edit";
    Model.componentInstance.content = obj;
    Model.result.then(data => {
      if (data == true) {
        this.fetchDetails();
      }
    })
  }
  deleteRow(id: String) {
    const model = this.model.open(DeleteAlertComponent, { size: 'md' })
    model.result.then(r => {
      if (r) {
        this.apiService.deleteCategory(id)
          .subscribe(x => {
            console.log("Printing delete response",x)
            if(x.res == 0){
              const popup = this.model.open(CantDeleteAlertComponent,{size : 'md'})
              popup.componentInstance.content = "Category contains Sub-Category data not able to delete!!!";
            }
            this.fetchDetails();
          })
      }
    })
  }
  addCategory() {
    const Model = this.model.open(AddCategoryComponent, {
      size: 'md'
    });
    Model.componentInstance.popupType = "category";
    Model.result.then(data => {
      if (data == true) {
        this.fetchDetails();
      }
    })
  }
}
