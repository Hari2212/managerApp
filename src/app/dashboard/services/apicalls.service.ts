import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  APIURL = "http://localhost:4000/api/";
  constructor(
    private http: HttpClient
  ) { }
  login(email : String){
    return this.http.post<any>(this.APIURL + "auth/login", {
      email: email
    }).pipe(map(res => {
      return res;
    }))
  }
  addCategory(title: String, userId: String) {
    return this.http.post<any>(this.APIURL + "app/addCategory", {
      title: title,
      userId: userId,
    }).pipe(map(res => {
      return res;
    }))
  }
  getAllCategory(userId: String) {
    return this.http.get<any>(this.APIURL + "app/getAllCategory?userId=" + userId).pipe(map(res => {
      return res;
    }))
  }
  updateCategory(categoryId: String, userId: String, title: String) {
    return this.http.put<any>(this.APIURL + "app/updateCategory", {
      userId: userId,
      categoryId: categoryId,
      title: title
    }).pipe(map(res => {
      return res;
    }))
  }
  deleteCategory(categoryId: String) {
    return this.http.delete<any>(this.APIURL + "app/deleteCategory/" + categoryId).pipe(map(res => {
      return res;
    }))
  }



  addSubCategory(title: String, userId: String, categoryId: String) {
    return this.http.post<any>(this.APIURL + "app/addSubCategory", {
      subCategoryTitle: title,
      userId: userId,
      categoryId: categoryId
    }).pipe(map(res => {
      return res;
    }))
  }
  getAllSubCategory(userId: String) {
    return this.http.get<any>(this.APIURL + "app/getAllSubCategory?userId=" + userId).pipe(map(res => {
      return res;
    }))
  }
  updateSubCategory(subCategoryId: String, title: String,categoryId : String) {
    return this.http.put<any>(this.APIURL + "app/updateSubCategory", {
      subCategoryId: subCategoryId,
      title: title,
      categoryId : categoryId
    }).pipe(map(res => {
      return res;
    }))
  }
  deleteSubCategory(subCategoryId: String) {
    return this.http.delete<any>(this.APIURL + "app/deleteSubCategory/" + subCategoryId).pipe(map(res => {
      return res;
    }))
  }



  addPayment(title: String, userId: String) {
    return this.http.post<any>(this.APIURL + "app/addPayment", {
      title: title,
      userId: userId,
    }).pipe(map(res => {
      return res;
    }))
  }
  getAllPayment(userId: String) {
    return this.http.get<any>(this.APIURL + "app/getAllPayment?userId=" + userId).pipe(map(res => {
      return res;
    }))
  }
  updatePayment(paymentId: String, title: String) {
    return this.http.put<any>(this.APIURL + "app/updatePayment", {
      paymentId: paymentId,
      title: title
    }).pipe(map(res => {
      return res;
    }))
  }
  deletePayment(paymentId: String) {
    return this.http.delete<any>(this.APIURL + "app/deletePayment/" + paymentId).pipe(map(res => {
      return res;
    }))
  }




  addExpenditures(title: String, userId: String,categoryId:String,subcategoryId:String,) {
    return this.http.post<any>(this.APIURL + "app/addExpenditures", {
      title: title,
      userId: userId,
      categoryId: categoryId,
      subcategoryId: subcategoryId,
    }).pipe(map(res => {
      return res;
    }))
  }
  getAllExpenditures(userId: String) {
    return this.http.get<any>(this.APIURL + "app/getAllExpenditures?userId=" + userId).pipe(map(res => {
      return res;
    }))
  }
  updateExpenditures(expendituresId: String,categoryId:String,subcategoryId:String, title: String) {
    return this.http.put<any>(this.APIURL + "app/updateExpenditures", {
      expendituresId: expendituresId,
      subcategoryId: subcategoryId,
      categoryId: categoryId,
      title: title
    }).pipe(map(res => {
      return res;
    }))
  }
  deleteExpenditures(expendituresId: String) {
    return this.http.delete<any>(this.APIURL + "app/deleteExpenditures/" + expendituresId).pipe(map(res => {
      return res;
    }))
  }



  addExpenses(amount: String, notes: String,paymentType:String,payOut:String,userId:String) {
    return this.http.post<any>(this.APIURL + "app/addExpenses", {
      amount: amount,
      notes: notes,
      paymentType: paymentType,
      payOut: payOut,
      userId: userId,
    }).pipe(map(res => {
      return res;
    }))
  }
  getAllExpenses(userId: String) {
    return this.http.get<any>(this.APIURL + "app/getAllExpenses?userId=" + userId).pipe(map(res => {
      return res;
    }))
  }
  updateExpenses(amount: String,notes:String,paymentType:String, payOut: String,expensesId :String) {
    return this.http.put<any>(this.APIURL + "app/updateExpenses", {
      amount: amount,
      notes: notes,
      paymentType: paymentType,
      payOut: payOut,
      expensesId: expensesId,
    }).pipe(map(res => {
      return res;
    }))
  }
  deleteExpenses(expensesId: String) {
    return this.http.delete<any>(this.APIURL + "app/deleteExpenses/" + expensesId).pipe(map(res => {
      return res;
    }))
  }



  getcategoryBasedSubCategory(subCategoryId: String) {
    return this.http.get<any>(this.APIURL + "app/getcategoryBasedSubCategory?subCategoryId=" + subCategoryId).pipe(map(res => {
      return res;
    }))
  }


}
