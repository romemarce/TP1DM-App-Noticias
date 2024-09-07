import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NewsApiService } from 'src/app/services/newsapi.service';
import { IPost, IUserProfile } from 'src/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: IUserProfile | undefined;
  post: IPost[] = [];
  newsApiService = new NewsApiService();

  public isLoggedIn: boolean = false;

  constructor(private router: Router, private auth: AuthService) {
    this.auth = new AuthService();
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  async ngOnInit() {
    if (this.isLoggedIn) {
      this.user = this.auth.currentUser();
      this.post = (await this.newsApiService.getPost()) || [];
    } else {
      this.router.navigate(['./home']);
    }
  }
}
