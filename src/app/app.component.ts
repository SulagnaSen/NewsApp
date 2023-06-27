import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  news:any;
  selectedValue = '';

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit() {
      console.log("init done");
    
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  getNewsFunc(){
    this.newsService.getNews().subscribe(data=>{
      this.news=data?data:this.news;
      this.news=this.news.articles;
      console.log(this.news);
  });
  }

  getBBCNewsFunc(){
    this.newsService.getBBCNews().subscribe(data=>{
      this.news=data?data:this.news;
      this.news=this.news.articles;
      console.log(this.news);
     // this.router.navigate(['/new-page', { content: 'This is the new content' }]);
  });
}

getEnglishNewsFunc(){
  this.newsService.getTechnologyNews().subscribe(data=>{
    this.news=data?data:this.news;
    this.news=this.news.articles;
    console.log(this.news);
   // this.router.navigate(['/new-page', { content: 'This is the new content' }]);
});
}

getTopHeadlinesFunc(){
  this.newsService.getTechnologyNews().subscribe(data=>{
    this.news=data?data:this.news;
    this.news=this.news.articles;
    console.log(this.news);
   // this.router.navigate(['/new-page', { content: 'This is the new content' }]);
});
}

}