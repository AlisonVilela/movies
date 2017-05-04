import { Component, Input, OnInit } from '@angular/core';

import { AlertService } from './../../../shared/alert/service/alert.service';

export class Movie{
    Title:string;
    Year:string;
    imdbID:string;
    Type:string;
    Poster:string;
    TimeOfSearch:Date;
}

@Component({
  selector: 'app-movie-card-search',
  templateUrl: './movie-card-search.component.html'
})
export class MovieCardSearchComponent implements OnInit {
  @Input()
  MovieInput: Movie;

  constructor(
    private _alertService: AlertService
  ) {

  }

  ngOnInit() {

  }
}
