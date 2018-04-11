import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-home',
  template: `
    <div class="ui container two column grid">
      <div class="ui container column">
        <h1>Home</h1>
        Das ist der BookMonkey<br /><br />
        <a routerLink="../books" class="ui red button">
          Buchliste ansehen
          <i class="right arrow icon"></i>
        </a>
      </div>
      <bm-search (bookSelected)="bookSelected($event)" class="column"></bm-search>
    </div>


  `,
  styles: []
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  bookSelected(book: Book) {
    this.router.navigate(['../books', book.isbn], { relativeTo: this.route});
  }

}