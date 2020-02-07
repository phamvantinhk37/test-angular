import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  @Output() alert = new EventEmitter<string>();
  @Output() productList = new EventEmitter<number>();
  isGridList = true;
  products = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.products =  data;
      this.productList.emit(this.products.length);
    }, (error: string) => {
      console.log(error);
      this.alert.emit(error);
    });
  }

}
