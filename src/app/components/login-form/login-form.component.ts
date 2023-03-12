import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  onSubmit(): void {
    if(this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control => control.markAsTouched())
    }
    
    console.log(this.loginForm);
  }

  get isUsernameInvalid(){
    return this.loginForm.get('username')?.invalid && this.loginForm.get('username')?.touched;
  }

  get isPasswordInvalid(){
    return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched;
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
