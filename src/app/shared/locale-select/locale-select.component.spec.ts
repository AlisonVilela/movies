import { TestBed, async } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LocaleSelectComponent } from './locale-select.component';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'base/src/assets/i18n/', '.json');
}

describe('LocaleSelectComponent', () => {
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
        LocaleSelectComponent
      ]
    }).compileComponents();
  }));

  it('should create the LocaleSelect', async(() => {
    const fixture = TestBed.createComponent(LocaleSelectComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
