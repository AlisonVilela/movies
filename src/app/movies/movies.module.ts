import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { NgPipesModule } from 'ngx-pipes';

import { MoviesRoutingModule } from './movies.routing.module';

import { FavoritesComponent } from './component/favorites/favorites.component';
import { SearchComponent } from './component/search/search.component';
import { DetailComponent } from './component/detail/detail.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';

import { SearchService } from './service/search/search.service';
import { FavoritesService } from './service/favorites/favorites.service';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    TranslateModule,
    InfiniteScrollModule,
    NgPipesModule
  ],
  declarations: [
    FavoritesComponent,
    SearchComponent,
    DetailComponent,
    MovieCardComponent
  ],
  providers: [
    SearchService,
    FavoritesService
  ]
})
export class MoviesModule { }
