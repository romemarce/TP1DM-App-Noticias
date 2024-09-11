import { Injectable } from '@angular/core';
import { correctEmail, correctPassword } from 'src/contants';
import { IAuthLogin, IUserProfile } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userProfile: IUserProfile = {
    email: correctEmail,
    name: 'Admin',
    news: { category: 'general' },
  };

  constructor() {}

  login({ email, password }: IAuthLogin): boolean {
    if (email === correctEmail && password === correctPassword) {
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
    return localStorage.getItem('isLoggedIn') === 'true' || false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  }
}
