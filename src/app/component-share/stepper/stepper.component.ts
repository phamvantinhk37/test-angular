import {Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import Stepper from 'bs-stepper';
import {StepperModel} from './stepper.config';
import * as _ from 'lodash';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() configStepper: StepperModel;
  option: StepperModel;
  constructor() {}
  ngOnInit() {
    this.focusSelectedStep(0);
  }
  focusSelectedStep(stepIndex) {
    _.forEach(this.configStepper.steps, (value, index) => {
      value.selected = (index === stepIndex);
    });
  }
  changeStep(id) {
    const index = _.findIndex(this.configStepper.steps, (object) => {
      return object.id === id;
    });
    this.focusSelectedStep(index);
  }
}
