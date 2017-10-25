// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// services
import { ApiService } from './shared/services/api.service';
import { VariableListenerService } from './shared/services/variableListener.service';
import { HelperService } from './shared/services/helper.service';

// components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemBoxComponent } from './item-list/item-box/item-box.component';
import { FooterComponent } from './footer/footer.component';
import { CustomizedItemComponent } from './customized-item/customized-item.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { CustomizedItemNavComponent } from './customized-item/customized-item-nav/customized-item-nav.component';
import { CustomizedItemFooterComponent } from './customized-item/customized-item-footer/customized-item-footer.component';
import { QuestionBoxComponent } from './customized-item/question-box/question-box.component';
import { ToppingBoxComponent } from './customized-item/topping-box/topping-box.component';
import { SelectedToppingBoxComponent } from './customized-item/selected-topping-box/selected-topping-box.component';
import { ToppingLimitModalComponent } from './customized-item/topping-limit-modal/topping-limit-modal.component';
import { AddToCartModalComponent } from './item-list/add-to-cart-modal/add-to-cart-modal.component';
import { QuantityDropdownComponent } from './shared/components/quantity-dropdown/quantity-dropdown.component';
import { PriceBoxComponent } from './shared/components/price-box/price-box.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ModalAlertComponent } from './shared/components/modal-alert/modal-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemListComponent,
    ItemBoxComponent,
    FooterComponent,
    CustomizedItemComponent,
    CarouselComponent,
    CustomizedItemNavComponent,
    CustomizedItemFooterComponent,
    QuestionBoxComponent,
    ToppingBoxComponent,
    SelectedToppingBoxComponent,
    ToppingLimitModalComponent,
    AddToCartModalComponent,
    QuantityDropdownComponent,
    PriceBoxComponent,
    ShoppingCartComponent,
    ErrorPageComponent,
    ModalAlertComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ ApiService, VariableListenerService, HelperService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
