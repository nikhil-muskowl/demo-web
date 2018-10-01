import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from "../config.service";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Response } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private url;
  public headers = new HttpHeaders();


  private formData: FormData = new FormData();
  public responseData: any;

  constructor(
    private configService: ConfigService,
    private http: HttpClient
  ) {
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  list() {
    this.url = this.configService.url + 'design_module/api/banners_api';
    this.formData.append('language_id', '1');
    return this.http.post(this.url, this.formData, { headers: this.headers });
  }

  detail(id: any) {
    this.url = this.configService.url + 'design_module/api/banners_api/detail/' + id;
    return this.http.get(this.url,
      {
        headers: this.headers,
      }
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
