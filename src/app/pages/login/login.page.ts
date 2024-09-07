import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertToast } from 'src/app/helpers/utils';
import { AuthService } from 'src/app/services/auth.service';
import { IAuthLogin } from 'src/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private router: Router, private auth: AuthService) {}

  async handleSubmit() {
    if (this.loginForm.valid) {
      let aux: IAuthLogin = this.loginForm.value;

      const isLogged = this.auth.login(aux);
      if (isLogged) {
        const user = this.auth.currentUser();
        console.log(user);
        this.router.navigate(['/dashboard']);
      } else {
        AlertToast('Usuario y/o Contraseña invalidos');
      }
    }
  }
}
