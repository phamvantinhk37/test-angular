import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccessRoleProfileComponent} from './access-role-profile/access-role-profile.component';
import {CustomerDomainComponent} from './customer-domain/customer-domain.component';
import {UnifiedProfileComponent} from './unified-profile.component';

const routes: Routes = [
  { path: '', component: UnifiedProfileComponent},
  { path: 'customer-domain-template',  component: CustomerDomainComponent},
  { path: 'access-role-template',  component: AccessRoleProfileComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnifiedProfileRoutingModule { }
