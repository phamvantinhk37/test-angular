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
  @Input() root: any;
  currentItem;
  parentItem;
  currentRoot;
  title: string;
  defaultData = [{title: 'Example-Title', url: 'example' , icon: 'fas fa-users-cog'}];
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.currentItem = this.data[0];
    if (!this.root) {
      console.log('Please delare root menu');
    } else {
      this.currentRoot = this.root;
    }
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

  navigateItem(rootItem, parentItem, chilItem) {
    if (chilItem) {
      this.router.navigateByUrl(rootItem.url + '/' + chilItem.url);
      this.parentItem = parentItem;
      this.currentItem = chilItem;
    } else {
      this.router.navigateByUrl(rootItem.url + '/' + parentItem.url);
      this.parentItem = null;
      this.currentItem = parentItem;
    }
  }
}
