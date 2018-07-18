import {NgModule} from "@angular/core";
import {CatalogueRoutingModule} from "../../routes/catalogue.routing";
import {CatalogueMainLayoutModule_Catalogue, CatalogueMainLayoutModuleComponent_Catalogue} from "@signature-it/ngx-catalogue";

@NgModule({
    imports: [
        CatalogueMainLayoutModuleComponent_Catalogue,
        CatalogueRoutingModule
    ],
})
/**
 * @extends CatalogueMainLayoutModule_Catalogue
 */
export class CatalogueMainLayoutModule {}


