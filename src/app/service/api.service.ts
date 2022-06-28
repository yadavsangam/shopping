import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<IProduct>("https://localhost:44313/api/products",{headers: {"Access-Control-Allow-Origin":"*"}})
    .pipe(map((res:IProduct)=>{
      return res;
    }))
  }
}
