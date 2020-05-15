import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  @Input() selectedList: Array<object>;
  @Input() config: object;
  @Input() attr: Array<object>;
  @Input() dataView: Array<object>;
  columnDefs;
  rowData;
  domLayout;
  gridOptions;
  selectedRows;
  constructor() {
    this.columnDefs = this.attr;
  //   this.columnDefs = [
  //   {field: 'customerDomainId', headerCheckboxSelection: true,
  //     headerCheckboxSelectionFilteredOnly: true,
  //     checkboxSelection: true},
  //   {field: 'customerDomainDesc'},
  // ];

    // this.rowData = [
    //   { customerDomainId: '1', customerDomainDesc: 'Celica'},
    //   { customerDomainId: '2', customerDomainDesc: 'Mondeo'},
    //   { customerDomainId: '3', customerDomainDesc: 'Boxter'},
    //   { customerDomainId: '4', customerDomainDesc: 'Boxter'}
    // ];
    this.rowData = this.dataView;
    // this.gridOptions = {
    //   defaultColDef: {
    //     resizable: true
    //   },
    //   columnDefs: this.columnDefs,
    //   rowData: this.rowData,
    //   domLayout: 'autoHeight',
    //   // gridReady: onGridReady,
    //   onFirstDataRendered: onFirstDataRendered,
    //   onSelectionChanged: onSelectionChanged
    //
    // };
    this.gridOptions = this.config;
    // function onGridReady(params) {
    //   params.api.sizeColumnsToFit();
    // }
    // function onFirstDataRendered(params) {
    //   params.api.sizeColumnsToFit();
    //   // params.api.autoSizeColumns();
    // }
    // function onSelectionChanged(params) {
    //   this.selectedRows = params.api.getSelectedRows();
    //   console.log(this.selectedRows);
    // }
  }

  ngOnInit() {
  }

}
