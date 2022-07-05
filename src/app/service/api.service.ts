import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http : HttpClient) { }

  addProduct(product: IProduct){
    this.http.post<IProduct>("https://localhost:44313/api/products",JSON.stringify(product),{
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-Type": "application/json"  
      }
    }).subscribe(result => console.log("Add Product"));
  }

  getProduct(){
    return this.http.get<IProduct>("https://localhost:44313/api/products",{headers: {"Access-Control-Allow-Origin":"*"}})
    .pipe(map((res:IProduct)=>{
      return res;
    }))
  }

  deleteProducts(productId:number){
    this.http.delete("https://localhost:44313/api/products/"+productId, {
      headers: {
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => console.log("Delete Product"))
  }
}
