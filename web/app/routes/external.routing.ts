import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'rule-form-page/:productId',
        loadChildren: () => import('../modules/rule-form-page.module').then(m => m.RuleFormPageModule)
    },
    {
        path: 'rule-form-page/:productId/:ruleId',
        loadChildren: () => import('../modules/rule-form-page.module').then(m => m.RuleFormPageModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExternalRoutingModule {}
