import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../modules/cart/cart.module').then(m => m.CartModule)
    },
    {
        path: 'checkout',
        loadChildren: () => import('../modules/cart/cart-checkout.module').then(m => m.CartCheckoutModule)
    },
    {
        path: 'confirmation',
        loadChildren: () => import('../modules/cart/cart-confirmation.module').then(m => m.CartConfirmationModule)
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
