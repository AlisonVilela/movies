import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Movie } from './../model/movie-card.model';

import { AlertService } from './../../../shared/alert/service/alert.service';
import { SearchService } from './../../service/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public movies: Movie[] = [];
  public movie: Movie;

  public title: string;
  public type: string;
  public SearchType: string = '';
  public page: number;

  constructor(
    private _alertService: AlertService,
    private _searchService: SearchService
  ) {

  }

  ngOnInit() {

  }

  onClickSearch(SearchTitle, SearchType) {
    this.title = SearchTitle;
    this.type = SearchType;
    this.page = 1;
    this._searchService.getMovieByTitle(this.title, this.page, this.type)
    .subscribe(
      data => {
        this.movies = data.Search;
      },
      error => {
        this._alertService.setAlert(
          {type: 'danger', message: 'Error'}
        );
      },
      () => console.log('Finished')
    );
  }

  onScroll() {
    this.page += 1;
    this._searchService.getMovieByTitle(this.title, this.page, this.type)
    .subscribe(
      data => {
        this.movies = this.movies.concat(data.Search);
      },
      error => {
        this._alertService.setAlert(
          {type: 'danger', message: 'Error'}
        );
      },
      () => console.log('Finished')
    );
  }
}
