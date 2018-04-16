// Used to set the Locales: de-CH
import localeCh from '@angular/common/locales/de-CH';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeCh);
// --------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BookStoreService } from './shared/book-store.service';
import { AppRoutingModule } from './app-routing.module';
import { BookResolver } from './shared/book-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    BookStoreService,
    { provide: LOCALE_ID, useValue: 'de-CH' },
    BookResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
