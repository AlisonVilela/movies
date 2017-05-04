import { TestBed, async } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DetailComponent } from './detail.component';

import { AlertService } from './../../../shared/alert/service/alert.service';
import { SearchService } from './../../service/search/search.service';
import { FavoritesService } from './../../service/favorites/favorites.service';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'base/src/assets/i18n/', '.json');
}

describe('DetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
        }
      })],
      declarations: [
        DetailComponent
      ],
      providers: [ FavoritesService, SearchService, AlertService ]
    }).compileComponents();
  }));

  it('should create the Detail', async(() => {
    const fixture = TestBed.createComponent(DetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
