import { TestBed, async } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FavoritesComponent } from './favorites.component';

import { AlertService } from './../../../shared/alert/service/alert.service';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'base/src/assets/i18n/', '.json');
}

describe('FavoritesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
        }
      })],
      declarations: [
        FavoritesComponent
      ],
      providers: [ AlertService ]
    }).compileComponents();
  }));

  it('should create the Favorites', async(() => {
    const fixture = TestBed.createComponent(FavoritesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
