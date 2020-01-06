import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppCustomPreloader, CheckRestrictedLoginGuard, CheckIsEmployeeGuard } from '@signature-it/ngx-generic';

@NgModule({
    imports: [
        RouterModule.forRoot([
                {
                    path: '',
                    canActivate: [CheckRestrictedLoginGuard],
                    canActivateChild: [CheckRestrictedLoginGuard],
                    loadChildren: () => import('./modules/layout.module').then(m => m.MainLayoutModule_Wrapper)
                },
                {
                    path: 'admin',
                    canActivate: [CheckIsEmployeeGuard],
                    canActivateChild: [CheckIsEmployeeGuard],
                    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
                },
                {
                    path: '**',
                    redirectTo: '404'
                }
            ],
            {preloadingStrategy: AppCustomPreloader}
        ),
        TranslateModule
    ],
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})
/**
 * @extends AppRoutingModuleGeneric
 */
export class AppRoutingModule {}


