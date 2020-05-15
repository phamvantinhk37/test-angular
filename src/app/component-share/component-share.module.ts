import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import {AgGridModule} from 'ag-grid-angular';
import {UiComponent} from '../share/ui/ui.component';
import {HeaderComponent} from '../share/header/header.component';
import {SidebarComponent} from '../share/sidebar/sidebar.component';

@NgModule({
  declarations: [AgGridComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  exports: [AgGridComponent]
})
export class ComponentShareModule { }
