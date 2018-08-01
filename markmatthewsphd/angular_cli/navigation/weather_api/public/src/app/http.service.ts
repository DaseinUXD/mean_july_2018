import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getItems(){
    return this._http.get('/items');
  }

  createItems(item: Object){
    return this._http.post('/items', item)
  }
}
