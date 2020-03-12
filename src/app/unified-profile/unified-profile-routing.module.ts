import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccessRoleProfileComponent} from './access-role-profile/access-role-profile.component';
import {CustomerDomainComponent} from './customer-domain/customer-domain.component';
import {UnifiedProfileComponent} from './unified-profile.component';
import {WorkflowComponent} from './workflow/workflow.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: UnifiedProfileComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'workflow', component: WorkflowComponent},
      {path: '', redirectTo: 'customer-domain-template', pathMatch: 'full'},
      {path: 'customer-domain-template', component: CustomerDomainComponent},
      {path: 'access-role-template', component: AccessRoleProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnifiedProfileRoutingModule {
}
