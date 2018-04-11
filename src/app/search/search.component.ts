import { BookStoreService } from './../shared/book-store.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  // unser Ziel:
  @Output() bookSelected = new EventEmitter<Book>();

  keyup = new EventEmitter<string>();
  isLoading = false;
  foundBooks: Book[] = [];

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.keyup
      .debounceTime(500)
      .distinctUntilChanged()
      .do(() => this.isLoading = true)
      .switchMap(searchTerm => this.bs.getAllSearch(searchTerm))
      .do(() => this.isLoading = false)
      .subscribe(books => this.foundBooks = books);
  }

}
