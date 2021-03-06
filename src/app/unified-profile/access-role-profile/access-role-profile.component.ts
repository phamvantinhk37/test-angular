import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-access-role-profile',
  templateUrl: './access-role-profile.component.html',
  styleUrls: ['./access-role-profile.component.css']
})
export class AccessRoleProfileComponent implements OnInit {
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
