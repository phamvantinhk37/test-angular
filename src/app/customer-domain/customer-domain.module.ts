import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDomainRoutingModule } from './customer-domain-routing.module';
import { CustomerDomainComponent } from './customer-domain.component';


@NgModule({
  declarations: [CustomerDomainComponent],
  imports: [
    CommonModule,
    CustomerDomainRoutingModule
  ]
})
export class CustomerDomainModule { }
