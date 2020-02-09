import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  VIEW_MODE = 'view-mode';
  CREATE_MODE = 'create-mode';
  EDIT_MODE = 'edit-mode';
  mode = this.VIEW_MODE;
  alertObject = {
    type: '',
    message: ''
  };
  selectedList: Array<string>;
  isGridActive = true;
  isShowSpinner = true;
  constructor(private apiService: ApiService) { }

  ngOnInit() {}
  changeView(mode) {
    this.mode = mode;
  }
  getError(alertObject) {
    this.alertObject = alertObject;
  }
  getProducts(productNumber) {
    this.isShowSpinner = productNumber === 0;
  }
  setMode(mode) {
    this.mode = mode;
  }
  activeGridView() {
    this.isGridActive = true;
  }
  activeListView() {
    this.isGridActive = false;
  }
  getSelectedList(selectedList) {
    this.selectedList = selectedList;
  }
  deleteProduct() {
    this.selectedList.forEach(id => {
      console.log(id);
      this.apiService.sendDeleteRequest(id).subscribe((successData: object) => {
        console.log(successData);
        this.alertObject = {
          type: 'alert-success',
          // @ts-ignore
          message: `Product ${id} is deleted successful`
        };
      }, (error: string) => {
        console.log(error);
        this.alertObject = {
          type: 'alert-danger',
          message: error
        };
      });
    });
  }

}
