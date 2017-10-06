import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListComponent } from './item-list/item-list.component';
import { CustomizedItemComponent } from './customized-item/customized-item.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: ItemListComponent },
    { path: 'main/:categoryId', component: ItemListComponent },
    { path: 'customize/:itemId', component: CustomizedItemComponent },
    { path: '**', redirectTo: '/main' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}