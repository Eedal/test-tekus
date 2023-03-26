import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Credential } from 'src/app/interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach((control) =>
        control.markAsTouched()
      );
    }

    const credentials: Credential = {
      UserName: this.loginForm.value.username,
      Password: this.loginForm.value.password,
    };

    this.authService.login(credentials).subscribe((user) => {
      const { FirstName, LastName } = user;
      localStorage.setItem('token', user.Token);
      localStorage.setItem('username', `${FirstName} ${LastName}`);
      this.router.navigate(['/subscribers']);
    });
    console.log(this.loginForm);
  }

  get isUsernameInvalid() {
    return (
      this.loginForm.get('username')?.invalid &&
      this.loginForm.get('username')?.touched
    );
  }

  get isPasswordInvalid() {
    return (
      this.loginForm.get('password')?.invalid &&
      this.loginForm.get('password')?.touched
    );
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
