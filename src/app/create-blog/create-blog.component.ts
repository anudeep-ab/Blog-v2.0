import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from 'app/blog.service';
import { BlogData } from 'app/models/blog.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  blog: BlogData;
  blogForm;
  id;
  constructor(private _blogService: BlogService, private router: Router) { }
  ngOnInit() {
    this.blogForm = new FormGroup({
      title: new FormControl(''),
      imagePath: new FormControl(''),
      description: new FormControl('')
      })
  }
  onSubmit(user) {
    this.blog = user.value;
    console.log(this.blog);
        // tslint:disable-next-line:curly
      if (this.id) this._blogService.update(this.id, this.blog);
      // tslint:disable-next-line:curly
      else this._blogService.create(this.blog);
      this.router.navigate(['/blogs']);
    }




}



