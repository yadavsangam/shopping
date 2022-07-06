import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService, private _router: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  // here we implement the search function
  search(event:any){
    this._router.navigate(['fetchproducts']);  //This line is for if we search something in another component
                                              //  so this line directly navigate to fetchproducts
                                              
    this.searchTerm = (event.target as HTMLInputElement).value; 
    this.cartService.search.next(this.searchTerm);
  }
}
