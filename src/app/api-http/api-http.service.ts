import { Exchange } from './../model/exchange.model';
import { AppConfig } from './../config/AppConfig';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  loading: boolean = false;
  errorMessage: string = "";


  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
    ) { }

    public getAllExchanges(url: string, options?: any) {
      url = this.appConfig.EXCHANGE_API_ENDPOINT + "/exchanges" + url;
      return this.http.get<Exchange[]>(url, options);
    }

    public get(url: string, options?: any) {
      url = this.appConfig.EXCHANGE_API_ENDPOINT + "/exchanges" + url;
      let data = this.http.get(url, options);
      console.log('data service: ' , data);
      return data;
    }

    public post(url: string, data: any, options?: any) {
      url = this.appConfig.EXCHANGE_API_ENDPOINT + "/exchanges" + url;
      return this.http.post(url, data, options);
    }

    public put(url: string, data: any, options?: any) {
      url = this.appConfig.EXCHANGE_API_ENDPOINT + "/exchanges" + url;
      return this.http.put(url, data, options);
    }

    public delete(url: string, options?: any) {
      url = this.appConfig.EXCHANGE_API_ENDPOINT + "/exchanges" + url;
      return this.http.delete(url, options);
    }


}
