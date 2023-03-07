import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dishlist',
  templateUrl: './dishlist.component.html',
  styleUrls: ['./dishlist.component.css']
})
export class DishlistComponent  implements OnInit{

  dishes:any=[]
  constructor(private service:AuthService,private router:Router){

  }

  ngOnInit(): void {
    this.service.getDishes().then(r=>r.json()).then(d=>this.dishes=d)
  }

  renderItem(id:any){
    this.router.navigate(["dishitem/",id])
  }

  renderReview(id:any){
    this.router.navigate(["rev/",id])
  }

}
