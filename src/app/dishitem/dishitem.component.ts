import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dishitem',
  templateUrl: './dishitem.component.html',
  styleUrls: ['./dishitem.component.css']
})
export class DishitemComponent implements OnInit {
  id:any=''
  item:any={}
  reviews:any=[]
  constructor(private route:ActivatedRoute,private service:AuthService){

  }
  ngOnInit(): void {
    
    this.route.params.subscribe(p=>this.id=p["id"])
    this.service.getDisheDetails(this.id).then(r=>r.json()).then(d=>this.item=d)
    this.service.getReview(this.id).then(r=>r.json()).then(d=>this.reviews=d)
  }

}
