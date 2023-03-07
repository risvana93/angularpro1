import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:AuthService,private router:Router){

  }

  loginform=new FormGroup({
    "username":new FormControl("",Validators.required),
    "password":new FormControl("",Validators.required)
  })
  submitted(){
    console.log(this.loginform.value)
    this.service.getToken(this.loginform.value).then(r=>r.json()).then(d=>localStorage.setItem("token",d.token))
    if("token" in localStorage){
      this.router.navigate(['dishes'])
    }
  }
}
