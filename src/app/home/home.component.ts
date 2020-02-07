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
  error = '';
  displayMode = {options : 'grid'};
  isShowSpinner = true;
  constructor(private apiService: ApiService) { }

  ngOnInit() {}
  changeView(mode) {
    this.mode = mode;
  }
  getError(error) {
    this.error = error;
  }
  getProducts(productNumber) {
    this.isShowSpinner = productNumber === 0;
  }
  setMode(mode) {
    this.mode = mode;
  }

}
