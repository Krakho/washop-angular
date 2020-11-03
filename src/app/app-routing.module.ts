import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { ContainerComponent } from './container/container.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [{
  path: '',
  component: ContainerComponent
},
{
  path: 'checkout/:id',
  component: CheckoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
