import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { AppConfig } from './config/AppConfig';
import { ApiHttpService } from './api-http/api-http.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatRippleModule,
    FormsModule,
    DatePipe,
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers : [MatDatepickerModule, MatNativeDateModule, ApiHttpService, AppConfig, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
