import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AjaxService {
 
  baseURL = "https://zerottanta.com/api/v2/utils/";
  appID = "723";
  URL = this.baseURL + this.appID + '/';

  constructor(
    private http: HttpClient
  ) { }

  test() {
    console.log("Ajax");
  }
  get(path) {
    return this.http.get(this.URL + path);
  }

}