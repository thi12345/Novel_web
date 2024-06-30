import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl, FormControl } from '@angular/forms';
import { AuthService } from 'src/service-user/auth.service';
import { User } from 'src/service-user/auth';
import { UserService } from 'src/service-user/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  registerForm: FormGroup=new FormGroup({});

  constructor( private authService: AuthService, private userService: UserService){}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    },{validators: this.passwordMatchValidator});
  }
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? { mismatch: true } : null;
  }
  onSubmit(): void {
    if(this.registerForm.valid){
      const newUser: User = {
        username: this.registerForm.get('username')!.value,
        password: this.registerForm.get('password')!.value,
        email: this.registerForm.get('email')!.value

      };
      if (this.authService.register(this.registerForm.value)) {
        this.userService.addUser(this.registerForm.value);
        alert('Registration successful!');
      } else {
        alert('Username already exists!');
      }

    }
    else {
      alert('Please fill out the form correctly.');
    }
  }
}
