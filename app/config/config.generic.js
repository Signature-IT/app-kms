/**
 * Created by shani on 12/09/17.
 */
window.GenericConfig = {
    isDam: false,
    loginRedirect: '',
    imagesPath: '',
    deliveryProductCode: '',
    productRelatedItemsField: '',
    item_per_page: {},
    // general
    systemName: 'generic',
    logoPath: '/skins/ratag_style/images/logo_xs.png',

    // product page
//    noImagePic: '',
//    noProductPic: '',
    noImagePic: '/images/Fittings/keterpim/No_Pic/No_Pic_{size}.jpg',
    productImagesPath: '/images/Fittings/',
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
    noSidebar: false,
    disable_friendly_url: true,
    productPageMainTitleField: 'ProductName_s',
    productPageSecondaryTitleField: 'Name_s',
    productCardMainTitleField: 'ProductName_s',
    productCardSecondaryTitleField: 'Name_s',
    familyCardMainTitleField: 'ProductName_s',
    familyCardSecondaryTitleField: 'Name_s',
    headerCmsName: 'ngx-header',
    personalAccountLink: '/account/previous-orders',
    item_per_page: [16, 24, 32]
};
