import { Component } from '@angular/core';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApicallsService } from '../services/apicalls.service';
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
    this.apiService.getAllCategory(this.userId)
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
    this.apiService.deleteCategory(id)
    .subscribe(x => {
      this.fetchDetails();
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
