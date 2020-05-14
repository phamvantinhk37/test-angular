import { Component, OnInit, HostListener } from '@angular/core';
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
  gridOptions;
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
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
    this.gridOptions = {
      defaultColDef: {
        resizable: true
      },
      columnDefs: this.columnDefs,
      rowData: this.rowData,
      domLayout: 'autoHeight',
      // gridReady: onGridReady,
      onFirstDataRendered: onFirstDataRendered,
      api: {}
    };
    function onGridReady(params) {
      params.api.sizeColumnsToFit();
    }
    function onFirstDataRendered(params) {
      params.api.sizeColumnsToFit();
    }
  }
}
