import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-domain',
  templateUrl: './customer-domain.component.html',
  styleUrls: ['./customer-domain.component.css']
})
export class CustomerDomainComponent implements OnInit {
  columnDefs;
  rowData;
  domLayout;
  ngOnInit() {
  }
  constructor() {
    this.columnDefs = [
      {field: 'make' },
      {field: 'model' },
      {field: 'price'}
    ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ];
    this.domLayout = 'autoHeight';
  }
}
