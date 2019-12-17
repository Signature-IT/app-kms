import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { catalogueReducer, CatalogueStoreModule, cartReducerGeneric, CartStoreModule } from '@signature-it/ngx-catalogue';
import { appReducer } from './reducers/app.reducer';

@NgModule({
    imports: [
        StoreModule.forRoot({
            app: appReducer,
            catalogue: catalogueReducer,
            cartState: cartReducerGeneric
        }),
        CatalogueStoreModule,
        CartStoreModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25
        }),
        EffectsModule.forRoot([])
    ]
})
export class AppStoreModule { }
