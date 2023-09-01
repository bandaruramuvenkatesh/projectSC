import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  who: string = '';

  constructor() {}

  ngOnInit(): void {
    const path = window.location.pathname;
    if (path.includes('admin')) {
      this.who = 'admin';
    } else if (path.includes('user')) {
      this.who = 'user';
    } else {
      this.who = 'home';
    }
  }
}
