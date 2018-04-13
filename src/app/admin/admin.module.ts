import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ],
  declarations: [BookFormComponent]
})
export class AdminModule { }
