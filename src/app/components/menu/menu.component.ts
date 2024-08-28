import { Component, Input, OnInit } from '@angular/core';
import { IMenuList, initIProfile, IProfile } from 'src/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menuList: IMenuList[] = [];

  @Input() profile: IProfile = initIProfile;

  constructor() {}

  validateUser() {
    if (this.profile.isLoggedIn) {
      this.menuList = [
        {
          path: '/dashboard',
          name: 'Dashboard',
          icon: 'home-sharp',
        },
      ];
    } else {
      this.menuList = [
        {
          path: '/home/login',
          name: 'Iniciar Sesion',
          icon: 'person-sharp',
        },
        {
          path: '/home/register',
          name: 'Crear cuenta',
          icon: 'person-add-sharp',
        },
      ];
    }
  }

  ngOnInit() {
    this.validateUser()
  }
}
