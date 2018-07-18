import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { CartRoutingModule } from "../../routes/cart.routing";
import { ContentloaderModule } from "@signature-it/ngx-generic";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CartRoutingModule,
        ContentloaderModule
    ]
})
/**
 * @extends CartLayoutModuleGeneric
 */
export class CartLayoutModule {}