import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StepperModel} from '../../component-share/stepper/stepper.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  configStepper: StepperModel;

  constructor() {
  }

  ngOnInit() {
    this.configStepper = {
      option: {
        linear: false,
        animation: true
      },
      steps: [
        {id: 'step-1', numberOfStep: '1', label: 'step 1'},
        {id: 'step-2', numberOfStep: '2', label: 'step 2'},
        {id: 'step-3', numberOfStep: '3', label: 'step 3'}
      ]
    };
  }
}
