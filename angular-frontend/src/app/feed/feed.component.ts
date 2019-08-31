import { Component, OnInit } from '@angular/core';

import {FeedService } from './feed.service';
import {Feed} from './feed'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [FeedService]
})
export class FeedComponent implements OnInit {

  posts :Feed[] = [];
  connection;
  post :Feed;

  constructor(private service : FeedService) { 

  }

  ngOnInit() {


    this.service.getList().subscribe(data => this.posts = data,err => {
      alert('Aconteceu um erro!');
    });


    this.connection = this.service.list().subscribe(post => {
      this.posts = [post, ...this.posts];      
    });

    this.connection = this.service.like().subscribe(likePost  => {
      this.posts = this.posts.map(post => post._id === likePost._id ? likePost : post);    
    });



  }

  handlerLike(id){
    this.service.addLike(id);
  }

}
