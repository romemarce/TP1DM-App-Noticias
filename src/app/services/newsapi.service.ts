import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  private apiUrl = 'https://romerodev-api.vercel.app/api/news';

  constructor(private http: HttpClient) {}

  getPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }
}
