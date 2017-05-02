import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { AlertComponent } from './shared/alert/component/alert.component';
import { LocaleSelectComponent } from './shared/locale-select/locale-select.component';
import { NavBarHeaderComponent } from './shared/nav-bar-header/nav-bar-header.component';
import { NotFoundComponent } from './shared/404/404.component';

import { AlertService } from './shared/alert/service/alert.service';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    LocaleSelectComponent,
    NavBarHeaderComponent,
    NotFoundComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [
    AlertService,
    TranslateService,
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
