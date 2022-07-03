import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { FetchproductsComponent } from './component/fetchproducts/fetchproducts.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path:'fetchproducts', component: FetchproductsComponent},
  {path:'cart', component: CartComponent},
  {path:'checkout' ,component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
