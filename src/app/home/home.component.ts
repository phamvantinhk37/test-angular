import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];
  error = '';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.products =  data;
    }, (error: string) => {
      console.log(error);
      this.error = error;
    });
  }

}
