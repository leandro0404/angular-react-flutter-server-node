import { Feed } from './../feed/feed';
import { AppRoutingModule } from './../app-routing.module';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {New} from './new';
import { NewService } from './new.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  model = new  New();
  @ViewChild('fileInput') fileInput;


  constructor( private router: Router,private service : NewService) { }

  ngOnInit() {
  }

  submit(){

    const fileBrowser = this.fileInput.nativeElement; 
    const formData = new FormData();    

        formData.append('image', fileBrowser.files[0]);
        formData.append('author', this.model.author as string);
        formData.append('place', this.model.place as string);
        formData.append('description', this.model.description as string);
        formData.append('hashtags', this.model.hashtags as string);
        console.log(formData);
         this.service.add(formData);
         this.router.navigate(["/Feed"]);   
  }

}
