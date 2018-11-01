// Core
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpModule } from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";
// Vendors
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { LocalStorageModule } from "angular-2-local-storage/dist";
import { CustomEventsService } from "@signature-it/ngx-generic";
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
    HttpLoaderFactory
} from "@signature-it/ngx-generic";
import {AppComponent} from "./app.component";
import {AppStoreModule} from "./stores/app/app.store";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        NoopAnimationsModule,
        FakeloaderComponentModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
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
        CustomEventsService,
        AuthRoutesGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }