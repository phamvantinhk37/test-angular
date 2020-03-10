import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as $ from 'jquery';
import {ActivatedRoute, Router} from '@angular/router';
import {Input} from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  @Input() data: any;
  currentItem;
  title: string;
  defaultData = [{title: 'Example-Title', url: 'example' , icon: 'fas fa-users-cog'}];
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.setCurrentItem(this.data[0]);
  }
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
    this.currentItem = currentItem;
    console.log(this.currentItem);
    this.title = currentItem.title;
  }
}
