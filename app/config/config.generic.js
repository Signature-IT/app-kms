/**
 * Created by shani on 12/09/17.
 */

var confGeneric = require('@signature-it/ngx-generic/app/config/config.generic');
var confCatalogueGeneric = require('@signature-it/ngx-catalogue/app/config/config.generic');

module.exports = Object.assign(confGeneric, confCatalogueGeneric, {
    // general
    systemName: 'generic',
    logoPath: '/skins/ratag_style/images/logo_xs.png',

    // product page
//    noImagePic: '',
//    noProductPic: '',
    productImagesPath: '/images/Fittings/ratag/Prod_Pic',
    productTabContexts: [
        {context_id: 29,field_layout: "table",order:1,name: "Product Specifications"},
        {context_id: 14,field_layout: "paragraph",order:2,name: "Product Features"},
        {context_id: 7,field_layout: "table",order:3,name: "Shipping Info"}
    ],
    productRelatedItemsGrid: {xs: 2, sm: 4, md: 3, lg: 3, all: 0},

    contactUsURL: 'https://www.parks.org.il/%D7%A6%D7%A8%D7%95-%D7%90%D7%99%D7%AA%D7%A0%D7%95-%D7%A7%D7%A9%D7%A8/',

    // catalogue
    catalog_selection_fields: ['BrandName_ss'],
    show_products_by_group: false,
    noSidebar: true
});