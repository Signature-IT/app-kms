import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { AccountPortalLayoutComponent, AuthRoutesGuard } from "@signature-it/ngx-generic";

const routes: Routes = [
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
/**
 * @extends BusinessRoutingModuleGeneric
 */
export class BusinessRoutingModule { }