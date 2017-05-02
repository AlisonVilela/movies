import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-locale-select',
  templateUrl: './locale-select.component.html'
})
export class LocaleSelectComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

  onClickFlag(locale) {
    this.translate.use(locale);
  }

}
