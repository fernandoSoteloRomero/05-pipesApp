import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    
    this.menuItems = [
      {label: "New", icon: 'pi pi-fw pi-plus'},
      {label: "Open", icon: 'pi pi-fw pi-download'},
      {label: "New", icon: 'pi pi-fw pi-refresh'},
    ]
    
  }
}
