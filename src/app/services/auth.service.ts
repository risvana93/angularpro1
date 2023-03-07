import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(data:any){
    // return fetch("http://127.0.0.1:8000/h/token")
    return fetch('http://127.0.0.1:8000/h/token', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  }

  getDishes(){
    return fetch('http://127.0.0.1:8000/mdishes/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token `+localStorage.getItem("token")
      },
    })
  }

  getDisheDetails(id:any){
    return fetch(`http://127.0.0.1:8000/mdishes/${id}/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token `+localStorage.getItem("token")
      },
    })
  }

  getReview(id:any){
    return fetch(`http://127.0.0.1:8000/mdishes/${id}/get_review/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token `+localStorage.getItem("token")
      },
    })
  }

  addReview(id:any,data:any){
    return fetch(`http://127.0.0.1:8000/mdishes/${id}/add_review/`, {
      method: 'GET',
      body:JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token `+localStorage.getItem("token")
      },
    })
  }

}

