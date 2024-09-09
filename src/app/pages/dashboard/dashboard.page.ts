import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NewsApiService } from 'src/app/services/newsapi.service';
import { correctEmail } from 'src/contants';
import { IPost, IUserProfile } from 'src/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: IUserProfile = {
    name: 'Admin',
    email: correctEmail,
    news: { category: 'general' },
  };
  posts: IPost[] = [];

  public isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private newsApiService: NewsApiService
  ) {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  ngOnInit() {
    if (this.isLoggedIn) {
      this.user = this.auth.currentUser();
      this.newsApiService
        .getPost({category: this.user.news.category})
        .subscribe((data) => (this.posts = data));
    } else {
      this.router.navigate(['./home']);
    }
  }
}
