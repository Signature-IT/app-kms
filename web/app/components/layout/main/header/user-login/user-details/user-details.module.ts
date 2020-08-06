import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainHeaderUserDetailsComponent } from "./user-details";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [MainHeaderUserDetailsComponent],
    exports: [MainHeaderUserDetailsComponent]
})
export class MainHeaderUserDetailsModule {}
