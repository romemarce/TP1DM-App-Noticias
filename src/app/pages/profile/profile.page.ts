import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile = {
    name: '',
    email: '',
    phone: '',
    access: {
      permissions: false,
      notifications: false
    },
    preferences: {
      pageSize: "10",
      language: 'es',
      category: 'business'
    }
  };

  constructor() { }

  ngOnInit() { }

  saveProfile() {
    // Implementar la lógica para guardar el perfil
    console.log('Perfil guardado:', this.profile);
  }
  goBack(){}


}
