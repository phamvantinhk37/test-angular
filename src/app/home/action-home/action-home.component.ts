import {Component, Output, Input, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-action-home',
  templateUrl: './action-home.component.html',
  styleUrls: ['./action-home.component.css']
})
export class ActionHomeComponent implements OnInit {
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
  createAction() {}
  editAction() {}
}
