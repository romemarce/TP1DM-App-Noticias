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

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async handleSubmit() {
    if (this.loginForm.valid) {
      const auth = new AuthService();
      let aux: IAuthLogin = this.loginForm.value;

      const isLogged = auth.login(aux);
      if (isLogged) {
        const user = auth.currentUser();
        console.log({ user });
        this.router.navigate(['/dashboard']);
      } else {
        const toast = await this.toastController.create({
          message: 'Servicio no disponible',
          duration: 1500,
          position: 'middle',
        });
        await toast.present();
      }
    }
  }
}
