import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemComponent } from './components/item/item.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { ItemDescriptionCardComponent } from './components/item-description-card/item-description-card.component';
import { MoreItemsCardComponent } from './components/more-items-card/more-items-card.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { FormsModule } from '@angular/forms';
import { CollectionEditFormComponent } from './components/collection-edit-form/collection-edit-form.component';
import { ItemEditFormComponent } from './components/item-edit-form/item-edit-form.component';
import { ProfileEditFormComponent } from './components/profile-edit-form/profile-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CollectionFormComponent,
    ProfileComponent,
    CollectionCardComponent,
    CollectionComponent,
    CartModalComponent,
    AuthModalComponent,
    ItemCardComponent,
    ItemComponent,
    PriceCardComponent,
    ItemDescriptionCardComponent,
    MoreItemsCardComponent,
    ItemFormComponent,
    CollectionEditFormComponent,
    ItemEditFormComponent,
    ProfileEditFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
