import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';

@Injectable()
export class BlogService {
  user: firebase.User;
  constructor(private http: Http, private db: AngularFireDatabase, private auth: AuthService) {
    this.auth.user$.subscribe(data => this.user = data );

  }
  // post(blog) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
    // console.log('no user comming');
    // this.db.object('/posts/' ).update(blog)
    // .then(function() {
    //   console.log('Document successfully deleted!');
    //  // this.router.navigate(['/home']);
    // }).catch(function(error) {
    //   console.error('Error removing document: ', error);
    // })
// }
create(blog) {
  return this.db.list('userBlogs/blog').push(blog);
}

getAll() {
  return this.db.list('/blog');
}

get(blogId) {
  return this.db.object('/blog/' + blogId);
}

update(blogId, blog) {
  return this.db.object('/blog/' + blogId).update(blog);
}

delete(blogId) {
  return this.db.object('/blog/' + blogId).remove();
}



}
