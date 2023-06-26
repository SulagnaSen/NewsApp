import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  news:any;
  constructor(private newsService: NewsService) {}
  
  ngOnInit() {
    this.newsService.getNews().subscribe(data=>{
      this.news=data?data:this.news;
      this.news=this.news.articles;
      console.log(this.news);
    });
  }

}
