import { TestBed, async } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';

import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NavBarHeaderComponent } from './nav-bar-header.component';
import { LocaleSelectComponent } from './../locale-select/locale-select.component';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'base/src/assets/i18n/', '.json');
}

describe('NavBarHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, RouterTestingModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
        }
      })],
      declarations: [
        NavBarHeaderComponent,
        LocaleSelectComponent
      ]
    }).compileComponents();
  }));

  it('should create the NavBar Header', async(() => {
    const fixture = TestBed.createComponent(NavBarHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
