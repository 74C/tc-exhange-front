import { DatePipe } from '@angular/common';
import { Exchange } from './../model/exchange.model';
import { ApiHttpService } from './../api-http/api-http.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ExchangeService } from './exchange.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['dateRequest', 'valueBuy', 'valueSell', 'dateExchange'];
  public dtRequest: any = new FormControl(new Date(), Validators.required);;

  public exchangesDS: any = [];
  public message: string = "";



  constructor(private service: ExchangeService,
              private apitHttp: ApiHttpService,
              private matTableModule: MatTableModule,
              private datePipe: DatePipe,
              ) {}

  ngAfterViewInit() {

  }

  public getExchange() {
    let dateRequest: any = this.datePipe.transform(this.dtRequest.value, 'MM-dd-yyyy')
    console.log('valor:: ' , dateRequest);
    this.service.getExchangeBC(dateRequest).then(data => {
      this.exchangesDS = [];
      this.exchangesDS.push(data);
      this.setMessage();
    }).catch(error => {
      this.exchangesDS = [];
      this.setMessage();
    });

  }

  public clearData() {
    this.exchangesDS = [];
  }

  setMessage() {

    if ((this.exchangesDS as Array<any>).length === 0) {
      this.message = "Não há cotação na data informada."
    } else {
      this.message = "data";
    }
  }

}
