import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../api.service';

@Component({
  selector: 'app-customer-domain-action',
  templateUrl: './customer-domain-action.component.html',
  styleUrls: ['./customer-domain-action.component.css']
})
export class CustomerDomainActionComponent implements OnInit {
  @Output() cancelAction = new EventEmitter<string>();
  @Output() alertObject = new EventEmitter<object>();
  @Input() actionMode: string;
  @Input() editData: object;
  @Output() refreshAction = new EventEmitter <boolean>();
  VIEW_MODE = 'view-mode';
  CREATE_MODE = 'create-mode';
  EDIT_MODE = 'edit-mode';
  model: object = {
    id: 0,
    customerDomainId: 0,
    customerDomainDesc: ''
  };
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    if (this.actionMode === this.EDIT_MODE) {
      this.model = this.editData;
    }
  }

  cancelEvent() {
    this.cancelAction.emit(this.VIEW_MODE);
  }
  createCustomerDomain() {
    console.log(this.model);
    this.apiService.createCustomerDomain(this.model).subscribe((successData: any) => {
      console.log(successData);
      this.alertObject.emit({
        type: 'alert-success',
        message: `Customer Domain ${successData.customerDomainId} is created successful`
      });
      this.cancelAction.emit(this.VIEW_MODE);
      this.refreshAction.emit(true);
    }, (error: string) => {
      this.alertObject.emit( {
        type: 'alert-danger',
        message: error
      });
      console.log(error);
    });
  }
  editCustomerDomain() {
    console.log(this.model);
    // @ts-ignore
    this.apiService.editCustomerDomain(this.model.id, this.model).subscribe((successData: any) => {
      console.log(successData);
      this.alertObject.emit({
        type: 'alert-success',
        message: `Customer Domain ${successData.customerDomainId} is edit successful`
      });
      this.cancelAction.emit(this.VIEW_MODE);
      this.refreshAction.emit(true);
    }, (error: string) => {
      this.alertObject.emit( {
        type: 'alert-danger',
        message: error
      });
      console.log(error);
    });
  }
}
