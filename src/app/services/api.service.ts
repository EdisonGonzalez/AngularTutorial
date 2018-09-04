import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public name;

  constructor(private http: HttpClient) { }












  requestHttp(requestType: string, url: string, bodyRequest: any, queryString: HttpParams): Observable<any> {
    return this.http.request(requestType, url,
      {
        body: bodyRequest,
        observe: "response",
        params: queryString
      })
  }

}
