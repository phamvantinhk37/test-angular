import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private PRODUCT_API = 'https://my-json-server.typicode.com/phamvantinhk37/serverside/products';
  private PRODUCT_API = 'http://localhost:8888/products';
  constructor(private httpClient: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest() {
    return this.httpClient.get(this.PRODUCT_API).pipe(catchError(this.handleError));
  }
  public sendGetRequestById(id) {
    return this.httpClient.get(`${this.PRODUCT_API}/${id}`).pipe(catchError(this.handleError));
  }
  public sendPostRequest(newProduct) {
    return this.httpClient.post(this.PRODUCT_API, newProduct).pipe(catchError(this.handleError));
  }
  public sendDeleteRequest(id) {
    return this.httpClient.delete(`${this.PRODUCT_API}/${id}`).pipe(catchError(this.handleError));
  }
  public sendPutRequest(id, editProduct) {
    return this.httpClient.put(`${this.PRODUCT_API}/${id}`, editProduct).pipe(catchError(this.handleError));
  }
}
