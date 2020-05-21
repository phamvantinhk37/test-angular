import {Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  @Output() selectedList  = new EventEmitter<Array<object>>();
  @Input() gridOptions: object;
  @Input() columnDefs: Array<object>;
  @Input() rowData: Array<object>;
  dataTmp =  new Array<object>();
  constructor() {
  }
  ngOnInit() {
  //   var defaultGridOptions = {
  //
  //   }
  //   this.gridOptions = extends(defaultGridOptions, gridOptions)
  }
  // onCellClicked(event) {
  //   this.selectedList.emit(event.data);
  //   console.log(event);
  // }
  onRowSelected(event) {
    if (event.node.isSelected()) {
      this.dataTmp.push(event.node);
    } else {
      _.remove(this.dataTmp, (object) => {
        return object.id === event.node.id;
      });
    }
    this.selectedList.emit(this.dataTmp);
  }
  onGridReady(event) {
    event.api.sizeColumnsToFit();
  }
}
