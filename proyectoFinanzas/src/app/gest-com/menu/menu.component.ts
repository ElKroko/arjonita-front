import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestCom-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
