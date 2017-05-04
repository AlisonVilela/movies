import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './../model/movie-card.model';

import { FavoritesService } from './../../service/favorites/favorites.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent implements OnInit {
  @Input()
  MovieInput: Movie;

  constructor(
    private _favoritesService: FavoritesService
  ) {

  }

  ngOnInit() {

  }

  switchFavorite(imdbID) {
    if (this._favoritesService.isFavorite(imdbID)) {
      this._favoritesService.deleteFavorite(imdbID);
    } else {
      this._favoritesService.setFavorite(imdbID);
    }
  }

  isFavorite(imdbID) {
    return this._favoritesService.isFavorite(imdbID);
  }
}
