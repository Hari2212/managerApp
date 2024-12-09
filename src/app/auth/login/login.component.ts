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
  otpForm: FormGroup;
  islogin: any;
  email: any;
  otpVerify = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiCalls: ApicallsService,
    // private toString : T
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
    })
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
    })
  }
  ngOnInit() {
    this.islogin = true;
  }
  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.apiCalls.login(this.loginForm.get('username')?.value)
      .subscribe(
        x => {
          this.email = this.loginForm.get('username')?.value;
          this.islogin = false;
        }
      )
    console.log(this.loginForm)
  }
  verifyOtp() {
    if(this.otpForm.invalid){
      this.otpForm.markAllAsTouched();
      return;
    }
    if (this.otpForm.valid) {
      this.apiCalls.verifyOtp(this.email, this.otpForm.get('otp')?.value)
        .subscribe({
          next: x => {
            this.otpVerify =true;
            this.router.navigateByUrl("/category")
          },
          error: e => {
            console.log("Prinitng otp err",e)
            this.otpVerify =false;
          }
        }
        )

    }
  }
}
