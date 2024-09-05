import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/newsapi.service';
import { IPost, IUser } from 'src/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: IUser = { name: 'Admin' };
  post: IPost[] = [];
  newsApiService = new NewsApiService();
  constructor() {}

  async ngOnInit() {
    const posts = await this.newsApiService.getPost();
    this.post = posts;
  }
}