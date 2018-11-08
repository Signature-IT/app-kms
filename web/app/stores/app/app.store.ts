import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { catalogueReducer, CatalogueStoreModule } from "@signature-it/ngx-catalogue";
import { cartReducerGeneric, CartStoreModule} from '@signature-it/ngx-generic';
import { appReducer } from "./reducers/app.reducer";

@NgModule({
    imports: [
        StoreModule.provideStore({
            app: appReducer,
            catalogue: catalogueReducer,
            cartState: cartReducerGeneric
        }),
        CatalogueStoreModule,
        CartStoreModule,
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 25
        })
    ],
    providers: [
        CartStoreModule
    ]
})
export class AppStoreModule { }