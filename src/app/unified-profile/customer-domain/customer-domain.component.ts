import {Component, OnInit, HostListener, SimpleChanges, OnChanges, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-domain',
  templateUrl: './customer-domain.component.html',
  styleUrls: ['./customer-domain.component.css']
})
export class CustomerDomainComponent implements OnInit {
  VIEW_MODE = 'view-mode';
  CREATE_MODE = 'create-mode';
  EDIT_MODE = 'edit-mode';
  mode = this.VIEW_MODE;
  editData : object;
  selectedList = [];
  alertObject = {
    type: '',
    message: ''
  };
  constructor() {}
  ngOnInit() {}
  changeView(mode) {
    this.mode = mode;
    if (this.mode === this.EDIT_MODE) {
      this.editData = this.selectedList[0].data;
    }
  }
  setMode(mode) {
    this.mode = mode;
  }
  getSelectedList(selectedList) {
    this.selectedList = selectedList;
    console.log(this.selectedList);
  }
  getError(alertObject) {
    this.alertObject = alertObject;
  }
}
