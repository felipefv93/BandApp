import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfilComponent } from './perfil.component';
import { PerfilRoutes } from './perfil.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PerfilRoutes),
        FormsModule
    ],
    declarations: [PerfilComponent]
})

export class PerfilModule {}
