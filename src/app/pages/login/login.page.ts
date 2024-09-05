import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correctUser = { email: 'admin@uner.com', password: 'admin' };

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private router:Router) {}

  ngOnInit() {}

  handleSubmit() {
      if (this.loginForm.valid) {
        let aux = this.loginForm.value
        if(this.correctUser.email === aux.email && this.correctUser.password === aux.password)
        //  console.log(this.loginForm.value);
          this.router.navigate(['/dashboard'])
      }
  }
}
