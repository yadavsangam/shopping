import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList : any ;
  // public filterCategory : any
  // searchKey:string ="";
  constructor(private api : ApiService) { }



  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      // this.filterCategory = res;
      // this.productList.forEach((a:any) => {
      //   if(a.category ==="women's clothing" || a.category ==="men's clothing"){
      //     a.category ="fashion"
      //   }
      //   Object.assign(a,{quantity:1,total:a.price});
      // });
      // console.log(this.productList)
    });
  }

}
