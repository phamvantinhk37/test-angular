import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-action-home',
  templateUrl: './action-home.component.html',
  styleUrls: ['./action-home.component.css']
})
export class ActionHomeComponent implements OnInit {
  @Output() cancelAction = new EventEmitter<string>();
  @Output() alertObject = new EventEmitter<object>();
  @Input() actionMode: string;
  VIEW_MODE = 'view-mode';
  CREATE_MODE = 'create-mode';
  EDIT_MODE = 'edit-mode';
  actionAlert: object;
  productModel = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    imageUrl: 'https://source.unsplash.com/1600x900/?product',
  };
  constructor(private apiService: ApiService) { }

  ngOnInit() {
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
      this.actionAlert = {
        type: 'alert-danger',
        message: error
      };
      console.log(error);
    });
  }
  editAction() {}
}
