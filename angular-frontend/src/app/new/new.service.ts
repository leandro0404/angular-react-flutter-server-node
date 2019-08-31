import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';


import {Feed} from '../feed/feed'

@Injectable({
  providedIn: 'root'
})
export class NewService {

  private url = 'http://localhost:3333';  

  constructor(private http : HttpClient) { }
  
  add(data : FormData){
   
    return this.http.post(this.url+'/posts',data).subscribe((data) => {}, err =>{
      console.log(err);
    });
  }

}



