import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-action-home',
  templateUrl: './action-home.component.html',
  styleUrls: ['./action-home.component.css']
})
export class ActionHomeComponent implements OnInit {
  @Output() cancelAction = new EventEmitter<string>();
  @Output() alertObject = new EventEmitter<object>();
  @Input() actionMode: string;
  @Input() id: number;
  VIEW_MODE = 'view-mode';
  CREATE_MODE = 'create-mode';
  EDIT_MODE = 'edit-mode';
  actionAlert = {
    type: '',
    message: ''
  };
  productModel = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    imageUrl: 'https://source.unsplash.com/1600x900/?product',
  };
  productModelBk = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    if (this.actionMode === this.EDIT_MODE) {
      console.log(this.id);
      this.getListById(this.id);
    }
  }
  getListById(id) {
    this.apiService.sendGetRequestById(id).subscribe((data: any) => {
      console.log(data);
      this.productModel =  data;
      this.productModelBk = _.clone(data);
      console.log(this.productModel);
    }, (error: string) => {
      console.log(error);
      this.actionAlert = {
        type: 'alert-danger',
        message: error
      };
    });
  }
  cancelEvent() {
    this.cancelAction.emit(this.VIEW_MODE);
  }
  createAction() {
    console.log(this.productModel);
    this.apiService.sendPostRequest(this.productModel).subscribe((successData: object) => {
      // @ts-ignore
      console.log(successData.name);
      this.alertObject.emit({
        type: 'alert-success',
        // @ts-ignore
        message: `Product ${successData.name} is created successful`
      });
      this.cancelAction.emit(this.VIEW_MODE);
    }, (error: string) => {
      this.alertObject.emit({
        type: 'alert-danger',
        message: error
      });
      console.log(error);
    });
  }
  editAction() {
    console.log(this.productModel);
    this.apiService.sendPutRequest(this.productModel.id, this.productModel).subscribe((successData: object) => {
      // @ts-ignore
      console.log(successData.name);
      this.alertObject.emit({
        type: 'alert-success',
        // @ts-ignore
        message: `Product ${successData.name} is updated successful`
      });
      this.cancelAction.emit(this.VIEW_MODE);
    }, (error: string) => {
      this.actionAlert = {
        type: 'alert-danger',
        message: error
      };
      console.log(error);
    });
  }
}
