import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}
 

  getTopHeadlines() {
    const url = 'https://newsapi.org/v2/top-headlines';
    const response = this.http.get(url, {
      params: {
        apiKey: 'e42f8b9bc5634d3aa38460bf04b256f6'
      }
    });
    return response;
  }

  getNews() {
    const url = 'https://newsapi.org/v2/top-headlines';
    const response = this.http.get(url, {
      params: {
        country: 'us',
        apiKey: 'e42f8b9bc5634d3aa38460bf04b256f6'
      }
    });
    return response;
}

  getBBCNews(){
    const url ='https://newsapi.org/v2/top-headlines';
    const response = this.http.get(url, {
      params: {
        sources: 'bbc-news',
        apiKey: 'e42f8b9bc5634d3aa38460bf04b256f6'
      }
    });
    return response;
  }

getTechnologyNews(){
  const url ='https://newsapi.org/v2/top-headlines';
    const response = this.http.get(url, {
      params: {
        language: 'en',
        category:'Technology',
        apiKey: 'e42f8b9bc5634d3aa38460bf04b256f6'
      }
    });  
    return response;
}
}