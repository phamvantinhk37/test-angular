import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-customer-domain',
  templateUrl: './customer-domain.component.html',
  styleUrls: ['./customer-domain.component.css']
})
export class CustomerDomainComponent implements OnInit {
  sidebarMenu: any;
  constructor(private routes: Router) { }

  ngOnInit() {
    this.sidebarMenu = this.initSidebar();
    console.log(this.routes);
  }
  initSidebar() {
    return [
      {title: 'Access Role Profile', url: 'access-role' , icon: 'fas fa-users-cog'},
      {title: 'Customer Domain', url: 'customer-domain' , icon: 'fas fa-users-cog'}
    ];
  }

}
