import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouterModule } from './dashboard.route';
import { CategoryComponent } from './category/category.component';
// import { SubCategoryComponent } from './sub-category/sub-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddsubCategoryComponent } from './addsub-category/addsub-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { AddExpenditureComponent } from './add-expenditure/add-expenditure.component';
import { ManageExpensesComponent } from './manage-expenses/manage-expenses.component';
import { AddManageExpensesComponent } from './add-manage-expenses/add-manage-expenses.component';

// import { MatDatepickerModule } from '@angular/material/datepicker'
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CategoryComponent,
    PaymentTypeComponent,
    SubCategoryComponent,
    AddCategoryComponent,
    AddsubCategoryComponent,
    ExpenditureComponent,
    AddExpenditureComponent,
    ManageExpensesComponent,
    AddManageExpensesComponent
  ],
  imports: [
    CommonModule,
    DashboardRouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
