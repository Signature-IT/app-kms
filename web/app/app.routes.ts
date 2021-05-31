import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppCustomPreloader, CheckRestrictedLoginGuard, CheckIsEmployeeGuard, RouteService } from '@signature-it/ngx-generic';
import {DecodeSeoUriPipeModule, EncodeSeoUriPipeModule} from '@signature-it/ngx-catalogue';

@NgModule({
    imports: [
        DecodeSeoUriPipeModule,
        EncodeSeoUriPipeModule,
        RouterModule.forRoot([
                {
                    path: 'admin',
                    canActivate: [CheckIsEmployeeGuard],
                    canActivateChild: [CheckIsEmployeeGuard],
                    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
                },
                {
                    path: '',
                    canActivate: [CheckRestrictedLoginGuard],
                    canActivateChild: [CheckRestrictedLoginGuard],
                    loadChildren: () => import('./modules/layout.module').then(m => m.MainLayoutModule_Wrapper)
                },
                {
                    path: 'external',
                    loadChildren: () => import('./modules/external-layout.module').then(m => m.MainExternalRoutingModule_Wrapper)
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
export class AppRoutingModule {
    constructor(protected routeService: RouteService) {}
}


