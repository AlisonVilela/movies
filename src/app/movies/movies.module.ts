import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { MoviesRoutingModule } from './movies.routing.module';

import { FavoritesComponent } from './component/favorites/favorites.component';
import { SearchComponent } from './component/search/search.component';
import { DetailComponent } from './component/detail/detail.component';
import { MovieCardSearchComponent } from './component/movie-card-search/movie-card-search.component';

import { SearchService } from './service/search/search.service';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    TranslateModule,
    InfiniteScrollModule
  ],
  declarations: [
    FavoritesComponent,
    SearchComponent,
    DetailComponent,
    MovieCardSearchComponent
  ],
  providers: [
    SearchService
  ]
})
export class MoviesModule { }
