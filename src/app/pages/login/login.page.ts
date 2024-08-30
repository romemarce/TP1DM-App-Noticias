import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  user = new FormControl('');
  password = new FormControl('');

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = new FormBuilder().group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    // if (this.loginForm.valid) {
      console.log({ user: this.user.value, password: this.password.value });
    // }
  }
}
