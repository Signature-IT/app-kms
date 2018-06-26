/**
 * Created by shani on 12/09/17.
 */

var confGeneric = require('@signature-it/ngx-generic/app/config/config.generic');

module.exports = Object.assign(confGeneric, {
  systemName: 'ratag',
  logoPath: '/skins/ratag_style/images/logo_xs.png',
  productImagesPath: '/images/Fittings/ratag/Prod_Pic',
  noImagePic: '/images/Fittings/ratag/No_Pic/No_Pic_Sma.jpg',
  contactUsURL: 'https://www.parks.org.il/%D7%A6%D7%A8%D7%95-%D7%90%D7%99%D7%AA%D7%A0%D7%95-%D7%A7%D7%A9%D7%A8/',
  showBusinessLogin: false,
  tabContexts: [
    {
      context_id: 33,
      field_layout: "table",
      order:1,
      name: "Price Table"
    },
    {
      context_id: 34,
      field_layout: "paragraph",
      order:2,
      name: "Arrival Instructions"
    },
    {
      context_id: 35,
      field_layout: "table",
      order:3,
      name: "Additional Details"
    },
    {
      context_id: 36,
      field_layout: "paragraph",
      order:4,
      name: "Activity Links"
    }
  ],
  catalog_selection_fields: ['BrandName_ss'],
  show_products_by_group: false
});