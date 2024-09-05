import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor() {}

  saveProfileSettings(profileData: { name: string; email: string; age: number }): void {
    localStorage.setItem('profile', JSON.stringify(profileData));
  }

  getProfileSettings(): { name: string; email: string; age: number } | null {
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(profile) : null;
  }

  clearProfileSettings(): void {
    localStorage.removeItem('profile');
  }
}
