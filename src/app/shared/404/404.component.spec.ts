import { TestBed, async } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NotFoundComponent } from './404.component';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'base/src/assets/i18n/', '.json');
}

describe('NotFoundComponent', () => {
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
        NotFoundComponent
      ]
    }).compileComponents();
  }));

  it('should create the NotFound', async(() => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
