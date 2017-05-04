import { TestBed, async } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { SearchComponent } from './search.component';

import { MovieCardComponent } from './../movie-card/movie-card.component';

import { AlertService } from './../../../shared/alert/service/alert.service';
import { SearchService } from './../../service/search/search.service';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'base/src/assets/i18n/', '.json');
}

describe('SearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ InfiniteScrollModule, RouterTestingModule, FormsModule, HttpModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
        }
      })],
      declarations: [
        SearchComponent,
        MovieCardComponent
      ],
      providers: [ AlertService, SearchService ]
    }).compileComponents();
  }));

  it('should create the Search', async(() => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
