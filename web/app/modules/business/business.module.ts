import { NgModule } from "@angular/core";
import { BusinessRoutingModule } from "../../routes/business.routing";
import {BusinessModuleGeneric} from "@signature-it/ngx-generic";

@NgModule({
    imports: [
        BusinessModuleGeneric,
        BusinessRoutingModule
    ]
})
export class BusinessModule {}
