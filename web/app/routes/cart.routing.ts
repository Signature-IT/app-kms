import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        loadChildren: '../modules/cart/cart.module#CartModule'
    },
    {
        path: 'checkout',
        loadChildren: '../modules/cart/cart-checkout.module#CartCheckoutModule'
    },
    {
        path: 'confirmation',
        loadChildren: '../modules/cart/cart-confirmation.module#CartConfirmationModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
/**
 * @extends CartRoutingModuleGeneric
 */
export class CartRoutingModule {}