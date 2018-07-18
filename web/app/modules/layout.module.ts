import { NgModule } from "@angular/core";
import { MainLayoutModuleGeneric } from "@signature-it/ngx-generic";
import { MainRoutingModule } from "../routes/main.routing";

@NgModule({
    imports: [
        MainLayoutModuleGeneric,
        MainRoutingModule
    ]
})
/**
 * @extends MainLayoutModuleGeneric_Wrapper
 */
export class MainLayoutModule {}