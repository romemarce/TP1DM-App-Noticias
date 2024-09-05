import { Injectable } from '@angular/core';
import { isNewsApiEnable } from 'src/contants';
import { mockArticles } from '../mocks/newsApi.mock';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  private APIKEY = 'ef93951e72e944828292758ed9b0b608';

  constructor() {}

  async getPost(query: string = '') {
    if (isNewsApiEnable) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=gaming&apiKey=${this.APIKEY}`
      );
      if (response.ok) {
        const { articles } = await response.json();

        return articles;
      } else {
        return [];
      }
    } else {
      const { articles } = mockArticles;

      return articles;
    }
  }
}
