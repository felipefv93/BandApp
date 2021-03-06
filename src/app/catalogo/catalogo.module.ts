import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BandasComponent } from './bandas/bandas.component';
// import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { CatalogoRoutes } from './catalogo.routing';
// import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(CatalogoRoutes),
      FormsModule
    ],
    declarations: [
        BandasComponent
    ]
  })
  
  export class CatalogoModule {}