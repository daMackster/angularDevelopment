import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  upvote(){
    this.article.votes = this.article.votes + 1;
  }

  downvote(){
    this.article.votes = (this.article.votes > 0)?this.article.votes - 1 : 0;
  }

  ngOnInit() {
  }

}
