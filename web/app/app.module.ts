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
    RestUrlsConfig,
    ShareDataService,
    RequestOptionsProvider,
    MenuNavigationService,
    LanguageService,
    AuthService,
    UserService,
    GoogleAnalyticsService,
    PageNotificationService,
    FakeloaderComponentModule,
    AuthRoutesGuard,
} from "@signature-it/ngx-generic";
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
        RestUrlsConfig,
        RequestOptionsProvider,
        MenuNavigationService,
        ShareDataService,
        LanguageService,
        GoogleAnalyticsService,
        PageNotificationService,
        UserService,
        AuthService,
        // MousetrapService,
        // CustomEventsService,
        AuthRoutesGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
