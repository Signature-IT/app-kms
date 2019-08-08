// Core
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// Vendors
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageModule } from 'angular-2-local-storage/dist';
// Routes
import {AppRoutingModule} from './app.routes';
// Components
import {
    GoogleAnalyticsService,
    FakeloaderComponentModule,
    NoopInterceptor,
    CustomTranslateLoader,
    HttpTranslateLoaderFactory,
    RestUrlsConfig
} from '@signature-it/ngx-generic';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppStoreModule} from './stores/app/app.store';
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        FakeloaderComponentModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: CustomTranslateLoader,
                useFactory: (HttpTranslateLoaderFactory),
                deps: [HttpClient, RestUrlsConfig]
            }
        }),
        LocalStorageModule.withConfig({
            prefix: 'app',
            storageType: 'localStorage'
        }),
        AppRoutingModule,
        AppStoreModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        CookieService,
        { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
        GoogleAnalyticsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
