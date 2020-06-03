import {Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as _ from 'lodash';
import {TestComponent} from '../test/test.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}
  @Input() configStepper: object;
  defaultConfig = {
    isLinear: true,
    isEditable: true,
    labelPosition: 'end',
    steps: [
      {id: 'step-1-id', title: 'step 1'},
      {id: 'step-1-id', title: 'step 2'}
    ]
  };

  ngOnInit() {
    this.configStepper = Object.assign(this.defaultConfig, this.configStepper);
  }


}
