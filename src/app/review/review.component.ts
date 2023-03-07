import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  id:any=''

  constructor(private service:AuthService,private route:ActivatedRoute){
    route.params.subscribe(p=>this.id=p["id"])
  }

  reviewform=new FormGroup({
    "review":new FormControl("",[Validators.required]),
    "rating":new FormControl("",[Validators.required,Validators.min(1),Validators.max(5)]),
  })

  submitted(){
    this.service.addReview(this.id,this.reviewform.value).then(r=>r.json()).then(d=>alert("Review Added")).catch(err=>("Review Adding Failed!Maybe review already added"))
  }
}
