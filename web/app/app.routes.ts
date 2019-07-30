import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppCustomPreloader, CheckRestrictedLoginGuard } from '@signature-it/ngx-generic';

@NgModule({
    imports: [
        RouterModule.forRoot([
                {
                    path: '',
                    canActivate: [CheckRestrictedLoginGuard],
                    loadChildren: () => import('./modules/layout.module').then(m => m.MainLayoutModule_Wrapper)
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


