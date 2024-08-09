import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // CommonModule'ü dahil edin

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule // CommonModule'ü imports listesine ekleyin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
