import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from '../../../api.service';

@Component({
  selector: 'app-customer-domain-view',
  templateUrl: './customer-domain-view.component.html',
  styleUrls: ['./customer-domain-view.component.css']
})
export class CustomerDomainViewComponent implements OnInit {
  @Output() selectedList = new EventEmitter<Array<object>>();
  @Output() alertObject = new EventEmitter<object>();
  attr;
  data;
  configAgGrid;
  constructor(private apiService: ApiService) {
    this.attr = [
      {headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true, resizable: false, minWidth: 40, maxWidth: 40
        },
      {field: 'customerDomainId'},
      {field: 'customerDomainDesc'},
    ];
    this.getList();
    this.configAgGrid = {
      defaultColDef: {
        resizable: true,
        sortable: true
        // rowDrag: true
      },
      columnDefs: this.attr,
      rowData: this.data,
      domLayout: 'autoHeight'
      // add row-color class for row
      // rowClassRules: {
      //   'row-color': function(params) {
      //     return params.node.rowIndex % 2 === 0;
      //   }
      // },
      // gridReady: onGridReady,
    };
  }
  ngOnInit() {}
  getSelectedList(selectedList) {
    this.selectedList.emit(selectedList);
  }
  getList() {
    this.apiService.getCustomerDomain().subscribe((data: any[]) => {
      this.data = data;
    }, (error: string) => {
      console.log(error);
      this.alertObject.emit({
        type: 'alert-danger',
        message: error
      });
    });
  }
}
