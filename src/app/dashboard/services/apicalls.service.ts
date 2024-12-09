import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../middlewere/helpers/userdetails';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  APIURL = "http://localhost:4000/api/";
 public userDetails!: BehaviorSubject<User>;
 public user! : Observable<User>;
  constructor(
    private http: HttpClient,
    private location : Location,
    private router : Router,
    // private toastr : ToastrService
  ) { 
  
    this.userDetails = new BehaviorSubject<User>(
      localStorage.getItem('userDetails')
        ? JSON.parse(localStorage.getItem('userDetails')!)
        : { userId: '', token: '' } 
    );
    this.user = this.userDetails.asObservable();
  }
  public get getToken(): User {
    return this.userDetails.value;
  }
  login(email : String){
    return this.http.post<any>(this.APIURL + "auth/login", {
      email: email
    }).pipe(map(res => {
      return res;
    }))
  }

  verifyOtp(email : String,otp : String){
    return this.http.post<any>(this.APIURL+"auth/verifyotp",{email:email,otp:otp})
    .pipe(map(res => {
      if(res.success){
        var obj : User = {
          userId : res.response.userId,
          token : res.response.token
        }
        localStorage.setItem('userDetails',JSON.stringify(obj))
        this.userDetails.next(obj);
      }
      return res;
    }))
  }
  addCategory(title: String) {
    return this.http.post<any>(this.APIURL + "app/addCategory", {
      title: title,
    }).pipe(map(res => {
      return res;
    }))
  }
  getAllCategory() {
    return this.http.get<any>(this.APIURL + "app/getAllCategory").pipe(map(res => {
      return res;
    }))
  }
  updateCategory(categoryId: String, title: String) {
    return this.http.put<any>(this.APIURL + "app/updateCategory", {
      
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



  addSubCategory(title: String, categoryId: String) {
    return this.http.post<any>(this.APIURL + "app/addSubCategory", {
      subCategoryTitle: title,
      categoryId: categoryId
    }).pipe(map(res => {
      return res;
    }))
  }
  getAllSubCategory() {
    return this.http.get<any>(this.APIURL + "app/getAllSubCategory").pipe(map(res => {
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



  addPayment(title: String) {
    return this.http.post<any>(this.APIURL + "app/addPayment", {
      title: title,
    }).pipe(map(res => {
      return res;
    }))
  }
  getAllPayment() {
    return this.http.get<any>(this.APIURL + "app/getAllPayment").pipe(map(res => {
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




  addExpenditures(title: String,categoryId:String,subcategoryId:String,) {
    return this.http.post<any>(this.APIURL + "app/addExpenditures", {
      title: title,
      categoryId: categoryId,
      subcategoryId: subcategoryId,
    }).pipe(map(res => {
      return res;
    }))
  }
  getAllExpenditures() {
    return this.http.get<any>(this.APIURL + "app/getAllExpenditures").pipe(map(res => {
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



  addExpenses(amount: String, notes: String,paymentType:String,payOut:String) {
    return this.http.post<any>(this.APIURL + "app/addExpenses", {
      amount: amount,
      notes: notes,
      paymentType: paymentType,
      payOut: payOut,
    }).pipe(map(res => {
      return res;
    }))
  }
  getAllExpenses(type : any,date : any) {
    return this.http.get<any>(this.APIURL + "app/getAllExpenses?getType=" + type + "&date=" + date).pipe(map(res => {
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



  getcategoryBasedSubCategory(categoryId: String) {
    return this.http.get<any>(this.APIURL + "app/getcategoryBasedSubCategory?categoryId=" + categoryId).pipe(map(res => {
      return res;
    }))
  }

  logout(){
    var obj : User = {
      userId : '',
      token : ''
    }
    this.userDetails.next(obj);
    localStorage.removeItem('userDetails');
    this.router.navigateByUrl('');
  }
  // error(content : any){
  //   console.log("Prinitng err content",content)
  //   this.toastr.error(content, 'Error');
  // }
}
