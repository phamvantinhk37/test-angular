import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-domain',
  templateUrl: './customer-domain.component.html',
  styleUrls: ['./customer-domain.component.css']
})
export class CustomerDomainComponent implements OnInit {
  sidebarMenu: any;

  ngOnInit() {
    this.sidebarMenu = this.initSidebar();
  }
  initSidebar() {
    return [
      {title: 'Access Role Profile', url: 'access-role' , icon: 'fas fa-users-cog'},
      {title: 'Customer Domain', url: 'customer-domain' , icon: 'fas fa-users-cog'}
    ];
  }
}
