import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-customer-domain-view',
  templateUrl: './customer-domain-view.component.html',
  styleUrls: ['./customer-domain-view.component.css']
})
export class CustomerDomainViewComponent implements OnInit, OnChanges {
  @Output() selectedList = new EventEmitter<Array<object>>();
  attr;
  data;
  configAgGrid;
  constructor() {
    this.attr = [
      {field: 'customerDomainId', headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true},
      {field: 'customerDomainDesc'},
    ];
    this.data = [
      { customerDomainId: '1', customerDomainDesc: 'Celica'},
      { customerDomainId: '2', customerDomainDesc: 'Mondeo'},
      { customerDomainId: '3', customerDomainDesc: 'Boxter'},
      { customerDomainId: '4', customerDomainDesc: 'Boxter'}
    ];
    this.configAgGrid = {
      defaultColDef: {
        resizable: true
      },
      columnDefs: this.attr,
      rowData: this.data,
      domLayout: 'autoHeight',
      // gridReady: onGridReady,
      onFirstDataRendered: onFirstDataRendered
    };
    function onFirstDataRendered(params) {
      params.api.sizeColumnsToFit();
    }
  }
  ngOnInit() {}
  getSelectedList(selectedList) {
    this.selectedList.emit(selectedList);
  }
}
