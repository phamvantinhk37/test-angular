import {Component, OnInit, HostListener, SimpleChanges, OnChanges, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-customer-domain',
  templateUrl: './customer-domain.component.html',
  styleUrls: ['./customer-domain.component.css']
})
export class CustomerDomainComponent implements OnInit {
  VIEW_MODE = 'view-mode';
  CREATE_MODE = 'create-mode';
  EDIT_MODE = 'edit-mode';
  isRefreshView: boolean;
  mode = this.VIEW_MODE;
  editData: object;
  data: Array<object>;
  selectedList = [];
  alertObject = {
    type: '',
    message: ''
  };

  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
    this.getList();
  }
  changeView(mode) {
    this.mode = mode;
    if (this.mode === this.EDIT_MODE) {
      this.editData = this.selectedList[0].data;
    }
  }
  setMode(mode) {
    this.mode = mode;
  }
  getSelectedList(selectedList) {
    this.selectedList = selectedList;
    console.log(this.selectedList);
  }
  getError(alertObject) {
    this.alertObject = alertObject;
  }
  getList() {
    this.apiService.getCustomerDomain().subscribe((data: any[]) => {
      this.data = data;
    }, (error: string) => {
      console.log(error);
      this.alertObject = {
        type: 'alert-danger',
        message: error
      };
    });
  }
  deleteCustomerDomain() {
    this.selectedList.forEach(item => {
      console.log(item);
      this.apiService.deleteCustomerDomain(item.data.id).subscribe((successData: any) => {
        console.log(successData);
        let detail: any;
        if (this.selectedList.length === 1) {
          detail = item.data.customerDomainId;
        } else {
          detail = this.selectedList.length;
        }
        this.selectedList.length = 0;
        this.alertObject = {
          type: 'alert-success',
          message: `Customer Domain ${detail} is deleted successful`
        };
        this.getList();
      }, (error: string) => {
        console.log(error);
        this.alertObject = {
          type: 'alert-danger',
          message: error
        };
      });
    });
  }
  refreshAction(event) {
    if (event) {
      this.getList();
    }
  }
}
