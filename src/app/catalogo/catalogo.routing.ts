import { Routes } from '@angular/router';

import { BandasComponent } from './bandas/bandas.component';
// import { EcommerceComponent } from './ecommerce/ecommerce.component';

export const CatalogoRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'bandas',
        component: BandasComponent
    }]}
];