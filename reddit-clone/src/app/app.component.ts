import { Component, Input } from '@angular/core';

class Article{
  public publishedAt: Date;

  constructor(
    public title: string,
    public description: string,
    public votes?:number
  ){
    this.votes = votes || 0;
    this.publishedAt = new Date();
  }

}



@Component({
  selector:'app-Article',
  template:`
    
  `
})
export class ArticleComponent{

}

@Component({
  selector: 'app-root',
  template:`
    <div class="ui container">
      <app-sidebar></app-sidebar>
      <div class="ui divide items">
        <app-Article 
          *ngFor="let article of articles"
          [article]="article"
          class="item"></app-Article>
      </div>
    </div>
  ` ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [
      new Article(
        'The Angular 2 screencast',
        'The easiest way to learn Angular 2'
      ),
      new Article(
        'Fullstack React',
        'Wanna 1earn React as well'
      )]
  }

}
