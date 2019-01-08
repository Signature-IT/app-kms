// import { RouterModule } from '@angular/router';
// import { NgModule } from "@angular/core";
// import { TranslateModule } from "@ngx-translate/core";
// import { AppCustomPreloader } from "@signature-it/ngx-generic";
//
// @NgModule({
//     imports: [
//         RouterModule.forRoot([
//                 {
//                     path: '',
//                     loadChildren: './modules/layout.module#MainLayoutModule'
//                 },
//                 {
//                     path: '**',
//                     redirectTo: '404'
//                 }
//             ],
//             {preloadingStrategy: AppCustomPreloader}
//         ),
//         TranslateModule
//     ],
//     exports: [RouterModule],
//     providers: [AppCustomPreloader]
// })
// /**
//  * @extends AppRoutingModuleGeneric
//  */
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


