import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Article} from './article';
import { environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

  private http: HttpClient;
  private articles: Article[];
  private data: Object;

  constructor(http: HttpClient) {
    this.http = http;
    //this.getArticles();
  }

  /*getArticles(): Observable<Article[]> {
    // ..
    const params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    params.set('source', 'reddit-r-all');

    const baseUrl: string = environment.newsDomain + '/v1/articles';
    const queryUrl = `${baseUrl}?${params}`;

    return this.http.get(queryUrl)
      .subscribe(response => {
      return <any>response['items'].map(item => {
        /!*return new Article({
          id: item.title,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });*!/
      });
    });

  }*/

}
