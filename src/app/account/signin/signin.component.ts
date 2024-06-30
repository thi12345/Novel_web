import { Component, NgModule, OnInit } from '@angular/core';
import { AuthService } from 'src/service-user/auth.service';
import { Router } from '@angular/router';
import { AbstractControl, NgForm, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { HeaderAccountComponent } from '../header-account/header-account.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  username: string ='';
  password: string ='';
  rememberMe: boolean = false;


  //LoginForm: FormGroup;

  constructor(private authService:AuthService, private router: Router) { }
  login():void{
    if(this.authService.login(this.username,this.password)){
      // this.message = "Login Success";
      alert('Login Success');
      this.router.navigate(['/home']);
    }
    else{
      alert('Invalid Username or Password');
    }
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value

  }
}
