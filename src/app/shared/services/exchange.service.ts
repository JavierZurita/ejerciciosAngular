import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("https://api.vatcomply.com/rates");
  }

  getDataExc(currency: string){
    console.log("Service: ", currency);
    
    return this.http.get(`https://api.vatcomply.com/rates?base=${currency}`);
  }
}
