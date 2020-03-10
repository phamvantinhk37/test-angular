import {Component, SimpleChanges, OnInit, Output, Input, EventEmitter, OnChanges} from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit, OnChanges {
  @Output() alertObject = new EventEmitter<object>();
  @Output() productList = new EventEmitter<number>();
  @Output() selectedList = new EventEmitter<Array<object>>();
  @Input() isGirdView: boolean;
  @Input() data: Array<object>;
  products = [];
  selectedProduct = [];
  isChecked = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getList();
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.getList();
  }
  getList() {
    this.apiService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.products =  data;
      this.productList.emit(this.products.length);
    }, (error: string) => {
      console.log(error);
      this.alertObject.emit({
        type: 'alert-danger',
        message: error
      });
    });
  }
  changeCheckBox(event) {
    console.log(event);
    if (event.checked) {
      this.selectedProduct.push({
        id: event.source.id,
        name: event.source.name
      });
    } else {
      if (this.selectedProduct.length > 0) {
        this.selectedProduct.forEach((value, index) => {
          if (value.id === event.source.id) {
            this.selectedProduct.splice(index, 1);
          }
        });
      }
    }
    this.selectedList.emit(this.selectedProduct);
    console.log(this.selectedProduct);
  }

}
