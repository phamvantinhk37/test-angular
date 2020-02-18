import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui/ui.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule, MatButtonModule, MatSidenavModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [UiComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [UiComponent, HeaderComponent, SidebarComponent]
})
export class ShareModule { }
