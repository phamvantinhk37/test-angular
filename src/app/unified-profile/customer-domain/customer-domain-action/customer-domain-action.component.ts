import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-customer-domain-action',
  templateUrl: './customer-domain-action.component.html',
  styleUrls: ['./customer-domain-action.component.css']
})
export class CustomerDomainActionComponent implements OnInit {
  @Output() cancelAction = new EventEmitter<string>();
  @Input() actionMode: string;
  VIEW_MODE = 'view-mode';
  CREATE_MODE = 'create-mode';
  EDIT_MODE = 'edit-mode';
  constructor() { }

  ngOnInit() {
  }

  cancelEvent() {
    this.cancelAction.emit(this.VIEW_MODE);
  }
}
