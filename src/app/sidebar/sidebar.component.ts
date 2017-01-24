import { Component, Input, OnInit } from '@angular/core';
import { Example } from '../shared/example';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input('items') items: Example[];
  constructor() { }

  ngOnInit() {
  }

}
