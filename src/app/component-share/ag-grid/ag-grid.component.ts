import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

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
  constructor() {
  }
  ngOnInit() {}
  onCellClicked(event) {
    this.selectedList.emit(event.data);
    console.log(event);
  }
}
