import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(private toastController: ToastController) {}

  ngOnInit() { }

  async handleSubmit() {
    if(this.registerForm.valid){
      console.log(this.registerForm.value); 
      const toast = await this.toastController.create({
        message: 'Servicio no disponible',
        duration: 1500,
        position:'middle'
      });
      await toast.present();
    }
  }
}
