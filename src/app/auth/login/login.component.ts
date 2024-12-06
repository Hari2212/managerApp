import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallsService } from '../../dashboard/services/apicalls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private apiCalls : ApicallsService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login(){
    if(this.loginForm.invalid){
      return;
    }
    this.apiCalls.login(this.loginForm.get('username')?.value)
    .subscribe(x => {
      console.log("data",x)
      localStorage.setItem('userId' , "67527ca4dacda77fe6d50fc9");
      this.router.navigateByUrl("/category")

    })
    
    // Login Api
    console.log(this.loginForm)
  }
}
