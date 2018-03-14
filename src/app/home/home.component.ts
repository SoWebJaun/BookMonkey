import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-home',
  template: `
    <h1>Home</h1>
    Das ist der BookMonkey<br /><br />
    <a routerLink="../books" class="ui red button">
      Buchliste ansehen
      <i class="right arrow icon"></i>
    </a>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
