import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { CollectionComponent } from './components/collection/collection.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "collection/:name", component: CollectionComponent },
  { path: "item/:name", component: ItemComponent },
  { path: "account", component: ProfileComponent },
  { path: "create", component: CollectionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
