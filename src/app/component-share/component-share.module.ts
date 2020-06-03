import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import {AgGridModule} from 'ag-grid-angular';
import {UiComponent} from '../share/ui/ui.component';
import {HeaderComponent} from '../share/header/header.component';
import {SidebarComponent} from '../share/sidebar/sidebar.component';
import { StepperComponent } from './stepper/stepper.component';
import {MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AgGridComponent, StepperComponent, TestComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [AgGridComponent, StepperComponent],
})
export class ComponentShareModule { }
