import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Route[] = [
  {path:'' , redirectTo:'/customer' ,pathMatch:'full'},
  {path:'customer' , component:CustomerComponent},
  {path:'orders' , component:OrdersComponent},
  {path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
