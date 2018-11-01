import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { catalogueReducer, CatalogueStoreModule } from "@signature-it/ngx-catalogue";
import { appReducer } from "./reducers/app.reducer";

@NgModule({
    imports: [
        StoreModule.provideStore({
            app: appReducer,
            catalogue: catalogueReducer
        }),
        CatalogueStoreModule,
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 25
        })
    ],
    providers: [

    ]
})
export class AppStoreModule { }