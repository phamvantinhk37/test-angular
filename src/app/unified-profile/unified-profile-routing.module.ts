import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccessRoleProfileComponent} from './access-role-profile/access-role-profile.component';
import {CustomerDomainComponent} from './customer-domain/customer-domain.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer-domain', pathMatch: 'full'},
  { path: 'customer-domain',  component: CustomerDomainComponent},
  { path: 'access-role',  component: AccessRoleProfileComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnifiedProfileRoutingModule { }
