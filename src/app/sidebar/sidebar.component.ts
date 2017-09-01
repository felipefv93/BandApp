import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from './sidebar-routes.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  constructor(private router:Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
