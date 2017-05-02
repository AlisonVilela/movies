import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FavoritesComponent } from './component/favorites/favorites.component';
import { SearchComponent } from './component/search/search.component';

const moviesRoutes: Routes = [
  { path: 'movies', children: [
    { path: 'favorites', component: FavoritesComponent},
    { path: 'search', component: SearchComponent}
  ]},
  { path: '', redirectTo: 'movies/search', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
