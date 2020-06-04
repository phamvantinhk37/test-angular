export class StepperModel {
  option: object;
  steps: Array<{id: string, numberOfStep: string, label: string}>;
  constructor(id: string, option: object, steps: []) {
    this.option = option;
    this.steps = steps;
  }}
