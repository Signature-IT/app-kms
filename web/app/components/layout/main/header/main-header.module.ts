import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    CmsModule,
    MainTopNavigationModuleGeneric,
    DropdownLangsModuleGeneric,
    MainHeaderSearchFormModuleGeneric,
    PhoneOrderModule,
    GroupsMenuModuleGeneric,
	AdditionalPaidServiceModule
} from '@signature-it/ngx-generic';

import { SearchModule_Catalogue, MainHeaderCartModuleGeneric } from '@signature-it/ngx-catalogue';
import { ModalLinkModuleGeneric} from "@signature-it/ngx-entity";
import { MainHeaderNavbarMobileModule } from './navbar-mobile/navbar-mobile.module';
import { MainHeaderNavbarMobileTopModule } from './navbar-mobile/top/navbar-mobile-top.module';
import { MainHeaderComponent } from './main-header';
import { UserLoginModule } from './user-login/user-login.module';
import {SolrFilterFieldsMotorcyclesModule} from "../../../custom-element-input/solr-filter-fields-motorcycles/solr-filter-fields-motorcycles.module";
import {FromToDateComponentModule} from "../../../custom-element-input/from-to-date/from-to-date.module";
import {MandatoryInsurancePricesComponentModule} from "../../../custom-element-input/mandatory-insurance-prices/mandatory-insurance-prices.module";
import {PropertyInsurancePricesComponentModule} from "../../../custom-element-input/property-insurance-prices/property-insurance-prices.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CmsModule,
        MainTopNavigationModuleGeneric,
        DropdownLangsModuleGeneric,
        UserLoginModule,
        MainHeaderSearchFormModuleGeneric,
        MainHeaderCartModuleGeneric,
        MainHeaderNavbarMobileTopModule,
        SearchModule_Catalogue,
        MainHeaderNavbarMobileModule,
        PhoneOrderModule,
        GroupsMenuModuleGeneric,
		SolrFilterFieldsMotorcyclesModule,
	    FromToDateComponentModule,
		MandatoryInsurancePricesComponentModule,
		PropertyInsurancePricesComponentModule,
        ModalLinkModuleGeneric,
		AdditionalPaidServiceModule
    ],
    declarations: [MainHeaderComponent],
    entryComponents: [MainHeaderComponent],
    exports: [MainHeaderComponent]
})
/**
 * @extends MainHeaderModuleGeneric
 */
export class MainHeaderModule {}
