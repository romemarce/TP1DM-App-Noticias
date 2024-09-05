import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NewsApiService } from 'src/app/services/newsapi.service';
import { initIUserProfile, IPost, IUserProfile } from 'src/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: IUserProfile = initIUserProfile;
  post: IPost[] = [];
  newsApiService = new NewsApiService();

  constructor(private router: Router, private auth: AuthService) {
    this.auth = new AuthService();
  }

  async ngOnInit() {
    this.user = this.auth.currentUser();
    const isLoggedIn = this.auth.isLoggedIn();

    if (isLoggedIn) {
      const posts = await this.newsApiService.getPost();
      this.post = posts;
    } else {
      this.router.navigate(['./home']);
    }
  }
}
