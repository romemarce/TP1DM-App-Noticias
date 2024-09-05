import { Injectable } from '@angular/core';
import { IAuthLogin, IUserProfile } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private correctEmail = 'admin@uner.com';
  private correctPassword = 'admin';
  private userProfile = { email: '', name: '' };

  constructor() {}

  login({ email, password }: IAuthLogin): boolean {
    if (email === this.correctEmail && password === this.correctPassword) {
      this.userProfile.email = email;
      this.userProfile.name = email;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', JSON.stringify(this.userProfile));
      return true;
    }
    return false;
  }

  currentUser(): IUserProfile {
    return JSON.parse(localStorage.getItem('username') || '');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  }
}
