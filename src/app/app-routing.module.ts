import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListComponent } from './item-list/item-list.component';
import { CustomizedItemComponent } from './customized-item/customized-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: ItemListComponent },
    { path: 'main/:categoryId', component: ItemListComponent },
    { path: 'customize/:itemId', component: CustomizedItemComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: 'error/:httpStatus', component: ErrorPageComponent},
    { path: '**', redirectTo: '/error' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}