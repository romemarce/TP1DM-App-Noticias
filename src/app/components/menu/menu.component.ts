import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IMenuList, IProfile } from 'src/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menuList: IMenuList[] = [];

  @Input() profile: IProfile = { isLoggedIn: false };
  @Input() isLoggedIn: boolean = false;

  constructor(private auth: AuthService) {
    this.auth = new AuthService();
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

  ngOnInit() {
    this.checkProfileUser();
  }

  handleLogout() {
    console.log('clicker');

    this.auth.logout();
    // this.router.navigate(['./home']);
  }
}
