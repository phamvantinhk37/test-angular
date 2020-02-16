import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ActivatedRoute} from '@angular/router';
import {Input} from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  @Input() data: any;
  currentItem;
  defaultData = [{title: 'Example-Title', url: 'example' , icon: 'fas fa-users-cog'}];
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {}
  sidebarToggle() {
    $('body').toggleClass('sidebar-toggled');
    $('.sidebar').toggleClass('toggled');
    if ($('.sidebar').hasClass('toggled')) {
      ($('.sidebar .collapse') as any).collapse('hide');
    }
  }

  onResize(event) {
    if (event.target.innerWidth < 768) {
      ($('.sidebar .collapse') as any).collapse('hide');
    }
  }

  setCurrentItem(currentItem) {
    this.currentItem = currentItem || this.data[0];
    console.log(this.currentItem);
  }
}
