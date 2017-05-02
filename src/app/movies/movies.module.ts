import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MoviesRoutingModule } from './movies.routing.module';

import { FavoritesComponent } from './component/favorites/favorites.component';
import { SearchComponent } from './component/search/search.component';

import { SearchService } from './service/search/search.service';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    TranslateModule
  ],
  declarations: [
    FavoritesComponent,
    SearchComponent
  ],
  providers: [
    SearchService
  ]
})
export class MoviesModule { }
