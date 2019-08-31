import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject , Observable} from 'rxjs';
import * as io from 'socket.io-client';

import {Feed} from './feed'

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private url = 'http://localhost:3333';  
  private socket;
  

  constructor(private http : HttpClient) { }
  
  getList(){
    return this.http.get<Feed[]>(this.url+'/posts');
  }

  addLike(id :String){  
   return  this.http.post(this.url+`/posts/${id}/like`,null).subscribe(data=>{
     console.log(data);
   });
  }

  list(){
    let observable = new Observable<Feed>(observer => {
      this.socket = io(this.url);
      this.socket.on('post', (data) => {
       
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
    
  }

  like(){
    let observable = new Observable<Feed>(observer => {
      this.socket = io(this.url);
      this.socket.on('like', (data) => {
        
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
    
  }

}



