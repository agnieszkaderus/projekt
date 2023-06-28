import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {PhonesComponent} from "./components/phones/phones.component";
import {AllItemsComponent} from "./components/all-items/all-items.component";
import {NotebooksComponent} from "./components/notebooks/notebooks.component";
import {TabletsComponent} from "./components/tablets/tablets.component";
import {AccessoriesComponent} from "./components/accessories/accessories.component";
import {ItemDetailComponent} from "./components/item-detail/item-detail.component";
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'phones', component: PhonesComponent },
  { path: 'notebooks', component: NotebooksComponent },
  { path: 'tablets', component: TabletsComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'all', component: AllItemsComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: ItemDetailComponent},
  { path: 'admin-home', component: AdminHomeComponent, canActivate: [AuthGuard]},
  { path: 'add-product', component: AddProductComponent,  canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
