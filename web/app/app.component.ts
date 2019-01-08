// import { Component, ViewContainerRef } from '@angular/core';
// import {
//     AppComponent as AppComponent_Generic
// } from "@signature-it/ngx-generic";
//
// @Component({
// 	selector: 'app-root',
// 	templateUrl: './app.component.html'
// })
// export class AppComponent extends AppComponent_Generic {
//
// }

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app-generic-new';
}
