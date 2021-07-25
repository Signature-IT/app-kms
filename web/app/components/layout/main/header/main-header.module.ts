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
	AdditionalPaidServiceModule,
    AddressFormModule
} from '@signature-it/ngx-generic';

import { EntityDocModule } from '@signature-it/ngx-entity';
import { SearchModule_Catalogue, MainHeaderCartModuleGeneric } from '@signature-it/ngx-catalogue';
import { ModalLinkModuleGeneric} from "@signature-it/ngx-entity";
import { MainHeaderNavbarMobileModule } from './navbar-mobile/navbar-mobile.module';
import { MainHeaderNavbarMobileTopModule } from './navbar-mobile/top/navbar-mobile-top.module';
import { MainHeaderComponent } from './main-header';
import { UserLoginModule } from './user-login/user-login.module';
import {DriverPolicyholderMotorcyclesComponentModule} from "../../../custom-element-input/driver-policyholder-motorcycles/driver-policyholder-motorcycles.module";
import {SolrFilterFieldsMotorcyclesModule} from "../../../custom-element-input/solr-filter-fields-motorcycles/solr-filter-fields-motorcycles.module";
import {FromToDateComponentModule} from "../../../custom-element-input/from-to-date/from-to-date.module";
import {MandatoryInsurancePricesComponentModule} from "../../../custom-element-input/mandatory-insurance-prices/mandatory-insurance-prices.module";
import {PropertyInsurancePricesComponentModule} from "../../../custom-element-input/property-insurance-prices/property-insurance-prices.module";
import {ProtectionsInsurancePricesComponentModule} from "../../../custom-element-input/protections-insurance-prices/protections-insurance-prices.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CmsModule,
        MainTopNavigationModuleGeneric,
        AddressFormModule,
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
        DriverPolicyholderMotorcyclesComponentModule,
		PropertyInsurancePricesComponentModule,
        ModalLinkModuleGeneric,
		AdditionalPaidServiceModule,
		ProtectionsInsurancePricesComponentModule,
		EntityDocModule
    ],
    declarations: [MainHeaderComponent],
    entryComponents: [MainHeaderComponent],
    exports: [MainHeaderComponent]
})
/**
 * @extends MainHeaderModuleGeneric
 */
export class MainHeaderModule {}
