import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { SubCategoryComponent } from "./sub-category/sub-category.component";
import { PaymentTypeComponent } from "./payment-type/payment-type.component";
import { ExpenditureComponent } from "./expenditure/expenditure.component";
import { ManageExpensesComponent } from "./manage-expenses/manage-expenses.component";
// import { SubCategoryComponent } from "./sub-category/sub-category.component";
const routes : Routes = [
    {
        path : '',
        component : CategoryComponent
    },
    {
        path : 'sub-category',
        component : SubCategoryComponent
    },
    {
        path : 'payment-type',
        component : PaymentTypeComponent
    },
    {
        path : 'expenditure',
        component : ExpenditureComponent
    },
    {
        path : 'manage-expenses',
        component : ManageExpensesComponent
    }
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class DashboardRouterModule{}