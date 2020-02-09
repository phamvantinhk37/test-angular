import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  @Output() alertObject = new EventEmitter<object>();
  @Output() productList = new EventEmitter<number>();
  @Output() selectedList = new EventEmitter<Array<string>>();
  @Input() isGirdView: boolean;
  products = [];
  selectedProduct = [];
  isChecked = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
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
    if (event.checked) {
      this.selectedProduct.push(event.source.id);
      this.selectedList.emit(this.selectedProduct);
    }
    console.log(this.selectedProduct);
  }

}
