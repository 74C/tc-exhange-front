import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHttpService } from '../api-http/api-http.service';

@Injectable({
  providedIn: 'root'

})

export class ExchangeService {
  loading: boolean = false;
  errorMessage: string = "";
  //exchanges: any = [];

  constructor(
    private http: HttpClient,
    private apitHttpService: ApiHttpService,
    ) {

  }


  public getExchangeBC(dataRequest: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.apitHttpService.get("/"+ dataRequest).subscribe(data => {
        if (data) {
          let exchanges: any = [];
          exchanges.push(data)
          resolve(exchanges);
        } else {
          reject(data);
        }
      });
    });
  }

  //https://www.tektutorialshub.com/angular/angular-http-get-example-using-httpclient/


  // getReposRawResponse(userName: string): Observable<any> {
  //   return this.http.get(this.baseURL + 'users/' + userName + '/repos', { observe: 'events', reportProgress: true })
  // }
  // getReposTypedResponse(userName: string): Observable<repos[]> {
  //   return this.http.get<repos[]>(this.baseURL + 'users/' + userName + '/repos')
  // }



}
