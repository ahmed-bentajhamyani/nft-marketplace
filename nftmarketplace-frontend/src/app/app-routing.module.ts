import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionEditFormComponent } from './components/collection-edit-form/collection-edit-form.component';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { CollectionComponent } from './components/collection/collection.component';
import { HomeComponent } from './components/home/home.component';
import { ItemEditFormComponent } from './components/item-edit-form/item-edit-form.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemComponent } from './components/item/item.component';
import { ProfileEditFormComponent } from './components/profile-edit-form/profile-edit-form.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "collection/:name", component: CollectionComponent },
  { path: "item/:name", component: ItemComponent },
  { path: "account/:walletAddress", component: ProfileComponent },
  { path: "edit/account/:walletAddress", component: ProfileEditFormComponent },
  { path: "create/collection", component: CollectionFormComponent },
  { path: "edit/collection/:name", component: CollectionEditFormComponent },
  { path: "create/item", component: ItemFormComponent },
  { path: "edit/item/:name", component: ItemEditFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
