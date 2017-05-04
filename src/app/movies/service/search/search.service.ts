import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private _http: Http) {
  }

  getMovieByTitle(Search, Page, Type) {
    let SearchType: string;
    if (Type !== '') {
      SearchType = '&type=' + Type;
    } else {
      SearchType = '';
    }
    return this._http.get(`https://www.omdbapi.com/?s=${Search}${SearchType}&page=${Page}`)
      .map(res => res.json());
  }

  getMovieById(Imdb) {
    return this._http.get(`https://www.omdbapi.com/?i=${Imdb}&plot=full`)
      .map(res => res.json());
  }
}
