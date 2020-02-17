import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnifiedProfileRoutingModule } from './unified-profile-routing.module';
import { UnifiedProfileComponent } from './unified-profile.component';
import { CustomerDomainComponent } from './customer-domain/customer-domain.component';
import { AccessRoleProfileComponent } from './access-role-profile/access-role-profile.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [UnifiedProfileComponent, CustomerDomainComponent, AccessRoleProfileComponent],
  imports: [
    CommonModule,
    UnifiedProfileRoutingModule,
    ShareModule
  ],
})
export class UnifiedProfileModule { }
