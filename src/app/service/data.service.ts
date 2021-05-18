import {HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class DataService {
private _getUrl="/api/display";
  constructor( private http:HttpClient) { }


getData(){
  // return this.http.get(this._getUrl).Map((response:Response)=>response.json())
  
  
}
}



