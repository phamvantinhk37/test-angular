import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  configStepper: object;
  constructor() { }

  ngOnInit() {
    this.configStepper = {
      isLinear: true,
      isEditable: true,
      labelPosition: 'end',
      steps: [
        {id: 'step-1-id', title: 'Step 1', content: 'step 1'},
        {id: 'step-2-id', title: 'step 2', option: false, content: `<h1>step 2</h1>`},
        {id: 'step-3-id', title: 'step 3',  content: 'step 3'},
      ]
    };
  }

}
