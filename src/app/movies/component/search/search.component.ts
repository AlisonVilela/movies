import { Component, OnInit } from '@angular/core';

import { AlertService } from './../../../shared/alert/service/alert.service';
import { SearchService } from './../../service/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(
    private _alertService: AlertService,
    private _searchService: SearchService
  ) {

  }

  ngOnInit() {

  }
}
