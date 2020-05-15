import { Component, OnInit, HostListener } from '@angular/core';
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

  ngOnInit() {
  }
  constructor() {}
  changeView(mode) {
    this.mode = mode;
    // if (this.mode === this.EDIT_MODE) {
    //   this.productId = this.selectedList[0].id;
    // }
  }
  setMode(mode) {
    this.mode = mode;
  }
}
