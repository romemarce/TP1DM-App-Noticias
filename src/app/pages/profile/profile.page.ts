import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  profile = {
    name: '',
    email: '',
    phone: '',
    access: {
      permissions: false,
      notifications: false,
    },
    preferences: {
      pageSize: '10',
      language: 'es',
      category: 'business',
    },
  };

  public image: string | undefined = '';

  async captureImage() {
    try {
      const result = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      this.image = result.dataUrl;
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  }

  saveProfile() {
    // Implementar la lógica para guardar el perfil
    console.log('Perfil guardado:', this.profile);
  }
  goBack() {}
}
