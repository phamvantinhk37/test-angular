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
import { CustomerDomainViewComponent } from './customer-domain/customer-domain-view/customer-domain-view.component';
import { CustomerDomainActionComponent } from './customer-domain/customer-domain-action/customer-domain-action.component';
import {ComponentShareModule} from '../component-share/component-share.module';
import {UnifiedProfileService} from './unified-profile.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UnifiedProfileComponent,
    CustomerDomainComponent,
    AccessRoleProfileComponent,
    DashboardComponent,
    WorkflowComponent,
    CustomerDomainViewComponent,
    CustomerDomainActionComponent],
  imports: [
    CommonModule,
    UnifiedProfileRoutingModule,
    ShareModule,
    ComponentShareModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UnifiedProfileService]
})
export class UnifiedProfileModule { }
