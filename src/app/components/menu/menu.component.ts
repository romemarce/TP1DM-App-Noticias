import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IMenuList, initIUserProfile, IProfile, IUserProfile } from 'src/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menuList: IMenuList[] = [];
  public currentUser: IUserProfile = initIUserProfile;
  public isLoggedIn: boolean;

  constructor(private auth: AuthService, private router: Router) {
    this.auth = new AuthService();
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  ngOnInit() {
    this.checkProfileUser();
  }

  checkProfileUser() {
    this.menuList = this.isLoggedIn
      ? [
          {
            path: '/dashboard',
            name: 'Dashboard',
            icon: 'home-sharp',
          },
        ]
      : [
          {
            path: '/home',
            name: 'Inicio',
            icon: 'person-sharp',
          },
          {
            path: '/home/login',
            name: 'Iniciar sesión',
            icon: 'person-sharp',
          },
          {
            path: '/home/register',
            name: 'Crear cuenta',
            icon: 'person-add-sharp',
          },
        ];
  }
  handleLogout() {
    console.log('clicker');

    this.auth.logout();
    this.router.navigate(['./home']);
  }
}
