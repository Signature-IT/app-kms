export const entityRoutes = [
    {
        path: 'doc/:entity-type/:product-id',
        loadChildren: () => import('../modules/entity/doc-page.module').then(m => m.DocPageModule),
    },
    {
        path: 'content-tree/:head',
        loadChildren: () => import('../modules/entity/entity-tree.module').then(m => m.EntityTreeModule),
    },
    {
        path: 'content-index/:type-var',
        loadChildren: () => import('../modules/entity/content-index.module').then(m => m.ContentIndexModule),
    },
    {
        path: 'entity/:id',
        loadChildren: () => import('../modules/entity/entity-page.module').then(m => m.EntityPageModule),
    },
    {
        path: ':type-var/page/:head',
        loadChildren: () => import('../modules/entity/entity-page.module').then(m => m.EntityPageModule),
    },
    {
        path: ':type-var/:head',
        loadChildren: () => import('../modules/entity/entity-page.module').then(m => m.EntityPageModule),
    },
    {
        path: 'form/collection/:collectionVar',
        loadChildren: () => import('../modules/entity/form-collection-page.module').then(m => m.FormCollectionPageModule),
    }
];
