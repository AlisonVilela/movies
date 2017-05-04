import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Movie } from './../model/movie-card.model';

import { AlertService } from './../../../shared/alert/service/alert.service';
import { SearchService } from './../../service/search/search.service';
import { FavoritesService } from './../../service/favorites/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {
  public favoritesMovies: string[] = [];
  public movies: Movie[] = [];
  public Order = '';
  constructor(
    private _alertService: AlertService,
    private _favoritesService: FavoritesService,
    private _searchService: SearchService
  ) {

  }

  ngOnInit() {
    const local = this;
    this.favoritesMovies = this._favoritesService.getFavorites();
    this.favoritesMovies.forEach(function(value) {
      local._searchService.getMovieById(value)
        .subscribe(
          data => {
            local.movies.push(data);
          },
          error => {
            local._alertService.setAlert(
              {type: 'danger', message: 'Error'}
            );
          },
          () => console.log('Finished')
      );
    });
  }
}
