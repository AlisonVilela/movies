import { Component, OnInit } from '@angular/core';

import { AlertService } from './../../../shared/alert/service/alert.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {

  constructor(
    private _alertService: AlertService
  ) {

  }

  ngOnInit() {

  }
}
