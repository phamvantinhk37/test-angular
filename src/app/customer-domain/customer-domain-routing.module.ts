import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDomainComponent } from './customer-domain.component';

const routes: Routes = [
  { path: '', component: CustomerDomainComponent},
  { path: 'customer-domain',  component: CustomerDomainComponent},
  { path: 'access-role',  component: CustomerDomainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDomainRoutingModule { }
