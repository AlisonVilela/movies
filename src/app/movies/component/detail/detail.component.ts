import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { AlertService } from './../../../shared/alert/service/alert.service';
import { SearchService } from './../../service/search/search.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  public movie;
  private sub: any;

  constructor(
    private _alertService: AlertService,
    private _route: ActivatedRoute,
    private _searchService: SearchService
  ) {

  }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {       ;
       this._searchService.getMovieById(params['imdb'])
       .subscribe(
         data => {
           this.movie = data;
         },
         error => {
           this._alertService.setAlert(
             {type: 'danger', message: 'Error'}
           );
         },
         () => console.log('Finished')
       );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
