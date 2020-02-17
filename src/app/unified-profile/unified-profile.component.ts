import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unified-profile',
  templateUrl: './unified-profile.component.html',
  styleUrls: ['./unified-profile.component.css']
})
export class UnifiedProfileComponent implements OnInit {
  sidebarMenu: any;
  constructor(private routes: Router) { }

  ngOnInit() {
    this.sidebarMenu = this.initSidebar();
    console.log(this.routes);
  }
  initSidebar() {
    const unifiedProfile = {title: 'Unified Profile', url: 'unified-profile' , icon: 'fas fa-users-cog', menuItems: []};
    const accessRoleProfile = {title: 'Customer Domain', url: 'customer-domain' , icon: 'fas fa-users-cog', parent: unifiedProfile};
    const customerDomain = {title: 'Customer Domain', url: 'customer-domain' , icon: 'fas fa-users-cog', parent: unifiedProfile};
    unifiedProfile.menuItems.push(accessRoleProfile);
    unifiedProfile.menuItems.push(customerDomain);
    return unifiedProfile;
  }
}
