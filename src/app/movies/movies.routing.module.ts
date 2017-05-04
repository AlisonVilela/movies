import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FavoritesComponent } from './component/favorites/favorites.component';
import { SearchComponent } from './component/search/search.component';
import { DetailComponent } from './component/detail/detail.component';

const moviesRoutes: Routes = [
  { path: 'movies', children: [
    { path: 'favorites', component: FavoritesComponent},
    { path: 'search', component: SearchComponent},
    { path: 'detail/:imdb', component: DetailComponent}
  ]},
  { path: '', redirectTo: 'movies/search', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
