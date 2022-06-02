import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-fetchproducts',
  templateUrl: './fetchproducts.component.html',
  styleUrls: ['./fetchproducts.component.css']
})
export class FetchproductsComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
    })
  }

}
