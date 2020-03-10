import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unified-profile',
  templateUrl: './unified-profile.component.html',
  styleUrls: ['./unified-profile.component.css']
})
export class UnifiedProfileComponent implements OnInit {
  sidebarMenu: any;
  rootMenu: any;

  ngOnInit() {
    this.sidebarMenu = this.initSidebar();
    this.rootMenu = {title: 'Unified Profile', url: 'unified-profile', id: 'dashboard'};
    console.log(this.sidebarMenu);
  }

  initSidebar() {
    return [
      {title: 'Dashboard', url: 'dashboard', icon: 'fas fa-users-cog', id: 'dashboard'},
      {title: 'Workflow', url: 'workflow', icon: 'fas fa-users-cog', id: 'workflow'},
      {
        title: 'Template', icon: 'fas fa-users-cog', id: 'template', menuItems: [
          {title: 'Access Role Profile', url: 'access-role-template', icon: 'fas fa-users-cog'},
          {title: 'Customer Domain', url: 'customer-domain-template', icon: 'fas fa-users-cog'},
        ]
      },
      {
        title: 'Device Config', url: 'customer-domain', icon: 'fas fa-users-cog', id: 'device-config', menuItems: [
          {title: 'Access Role Profile', url: 'access-role-device-config', icon: 'fas fa-users-cog'},
          {title: 'Customer Domain', url: 'customer-domain-device-config', icon: 'fas fa-users-cog'},
        ]
      }
    ];
  }
}
