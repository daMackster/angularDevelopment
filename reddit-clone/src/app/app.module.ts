import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent} from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ArticleListComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule /*soon*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

