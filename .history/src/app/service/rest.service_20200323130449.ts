import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "environments/environment";

const http = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json"
  })
};
const API_URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  addData(sistema, add: String) {
    const sistemaAdd = JSON.stringify(sistema);
    return this.http.post(API_URL + add, sistemaAdd, http).pipe(
      map(
        (res: any) => {
          return res;
        },
        error => {
          console.log('Error: ', error);
        }
      )
    );
  }
 UpData(sistema, update: String) {
    const sistemaUp = JSON.stringify(sistema);
    return this.http.put(API_URL + update, sistemaU, http).pipe(
      map(
        (res: any) => {
          return res;
        },
        error => {
          console.log('Error: ', error);
        }
      )
    );
  }
  findData(data: number) {
    return this.http.get(API_URL + data, http).pipe(
      map(
        (res: any) => {
          return res;
        },
        error => {
          console.log('Error: ', error);
        }
      )
    );
  }

  findDataById(url: string, data: number) {
    return this.http.get(API_URL+ url + data, http).pipe(
      map(
        (res: any) => {
          return res;
        },
        error => {
          console.log('Error: ', error);
        }
      )
    );
  }


}
