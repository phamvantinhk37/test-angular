import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDomainRoutingModule } from './customer-domain-routing.module';
import { CustomerDomainComponent } from './customer-domain.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [CustomerDomainComponent],
  imports: [
    CommonModule,
    CustomerDomainRoutingModule,
    ShareModule
  ]
})
export class CustomerDomainModule { }
