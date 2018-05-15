import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Blog} from './blog';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: Http) { }

  // retreiving blogs

  getBlogs(){
    return this.http.get('http://localhost:3000/api/blogs').pipe(map(res => res.json()));
    //turn into observable and set res as res.json.
  }

  addBlog(newBlog){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/blog', newBlog, {headers:headers}).pipe(map(res => res.json()));
  }
}
