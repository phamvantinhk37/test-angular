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
  productId: number;
  selectedList: Array<{id: 0, name: 'test'}>;
  isGridActive = true;
  isShowSpinner = true;
  productsData = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {}
  changeView(mode) {
    this.mode = mode;
    if (this.mode === this.EDIT_MODE) {
      this.productId = this.selectedList[0].id;
    }
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
    console.log('selectedList', selectedList);
    this.selectedList = selectedList;
  }
  getList() {
    this.apiService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.productsData =  data;
    }, (error: string) => {
      console.log(error);
      this.alertObject = {
        type: 'alert-danger',
        message: error
      };
    });
  }
  deleteProduct() {
    this.selectedList.forEach(item => {
      console.log(item);
      this.apiService.sendDeleteRequest(item.id).subscribe((successData: object) => {
        console.log(successData);
        let detail: any;
        if (this.selectedList.length === 1) {
          detail = item.name;
        } else {
          detail = this.selectedList.length;
        }
        this.selectedList.length = 0;
        this.alertObject = {
          type: 'alert-success',
          // @ts-ignore
          message: `Product ${detail} is deleted successful`
        };
      }, (error: string) => {
        console.log(error);
        this.alertObject = {
          type: 'alert-danger',
          message: error
        };
      });
    });
    this.getList();
  }

}
