// Core
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HttpClient } from "@angular/common/http";
// Vendors
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

// import { MousetrapService } from 'delta-angular/src/app/services/mousetrap';
// import { CustomEventsService } from 'delta-angular/src/app/services/custom-events';

import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { LocalStorageModule } from "angular-2-local-storage/dist";


// Routes
import {AppRoutingModule} from "./app.routes";
// Components
import {
    ShareDataService,
    GoogleAnalyticsService,
    FakeloaderComponentModule,
    NoopInterceptor
} from "@signature-it/ngx-generic";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppComponent} from "./app.component";
import {HttpTranslateLoaderFactory} from './loaders/translate-http-loader';
import {AppStoreModule} from "./stores/app/app.store";
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        FakeloaderComponentModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpTranslateLoaderFactory,
                deps: [HttpClient]
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
        ShareDataService,
        GoogleAnalyticsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
