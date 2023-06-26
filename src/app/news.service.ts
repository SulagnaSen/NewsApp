import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getNews() {
    const url = 'https://newsapi.org/v2/top-headlines';
    console.log("inside get");
    const response = this.http.get(url, {
      params: {
        country: 'us',
        apiKey: 'e42f8b9bc5634d3aa38460bf04b256f6'
      }
    });
    return response;
    /*.pipe(map((data: any) =>{
      console.log(data);
      return data;
    }));*/
  }

  /*postNews(title: string, content: string) {
    const url = 'https://apilist.fun/api/news';
    const body = {
      title: title,
      content: content
    };
    const response = this.http.post(url, body, {
      params: {
        apiKey: 'e42f8b9bc5634d3aa38460bf04b256f6'
      }
    });
    return response.pipe(map(data => data));
  }
*/
}
