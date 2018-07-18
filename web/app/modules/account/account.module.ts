import { NgModule } from "@angular/core";
import { AccountPortalLayoutComponentModule } from "@signature-it/ngx-generic";
import { AccountRoutingModule } from "../../routes/account.routing";

@NgModule({
    imports: [
        AccountPortalLayoutComponentModule,
        AccountRoutingModule
    ]
})
/**
 * @extends AccountModuleGeneric
 */
export class AccountModule {}