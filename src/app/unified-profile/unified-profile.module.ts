import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnifiedProfileRoutingModule } from './unified-profile-routing.module';
import { UnifiedProfileComponent } from './unified-profile.component';
import { CustomerDomainComponent } from './customer-domain/customer-domain.component';
import { AccessRoleProfileComponent } from './access-role-profile/access-role-profile.component';
import {ShareModule} from '../share/share.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [UnifiedProfileComponent, CustomerDomainComponent, AccessRoleProfileComponent, DashboardComponent, WorkflowComponent],
  imports: [
    CommonModule,
    UnifiedProfileRoutingModule,
    ShareModule,
    AgGridModule.withComponents([])
  ],
})
export class UnifiedProfileModule { }
