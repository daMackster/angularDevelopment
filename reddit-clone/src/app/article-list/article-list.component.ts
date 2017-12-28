import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Article} from '../article';
import {environment} from '../../environments/environment';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: Article[];
  data: Object;
  loading: boolean;

  constructor(public http: HttpClient) {
    //this.makeRequest();
    this.getArticles();
   /* this.articles = [
      new Article(
        'The Angular 2 screen cast',
        'The easiest way to learn Angular 2'
      ),
      new Article(
        'Full stack React',
        'Wanna 1earn React as well'
      )];*/
  }

  ngOnInit() {}

  makeRequest(): void {
  this.http
           .get('https://jsonplaceholder.typicode.com/posts/1')
           .subscribe(data => {
               this.data = data;
               this.loading = false;
             this.articles = [
               new Article(
                 'The Angular 2 screen cast',
                 'The easiest way to learn Angular 2'
               ),
               new Article(
                 'Full stack React',
                 'Wanna 1earn React as well'
               )];
             console.log(this.data);

           });

  }

  getArticles(): void {
    // ..
    const params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    params.set('source', 'reddit-r-all');

    const baseUrl: string = environment.newsDomain;
   this.http
      .get(`${baseUrl}/v1/articles?${params}`)
      .subscribe(data => {
        console.log(data['articles']);
        const tempArray = data['articles'];
        console.log(this.articles);
        if (tempArray != null && tempArray.length > 0) {
          tempArray.forEach(function(item){
            /*this.articles.push(
              new Article(
                item.title,
                item.description
              )
            );*/
            /*this.articles = [
              new Article(
                item.title,
                item.description
              ),
              new Article(
                'Full stack React brian',
                'Wanna 1earn React as well'
              )];*/
          });
        }
        /*this.articles = [
          new Article(
            'Full stack React brian',
            'Wanna 1earn React as well'
          )];*/
        console.log(this.articles);
      });
  }
}
