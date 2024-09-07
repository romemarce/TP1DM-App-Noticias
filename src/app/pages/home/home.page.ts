import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IError, initIError } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private auth:AuthService, private router: Router) {
    this.auth = new AuthService();
  }

  ngOnInit(){
    const isLoggedIn = this.auth.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/dashboard'])
    }
  }

}