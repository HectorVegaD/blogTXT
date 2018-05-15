import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Blog} from '../blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  //provide service as to use it.
  providers: [BlogService]
})
export class BlogsComponent implements OnInit {
  blogs: Blog[]=[];
  blog: Blog;
  title:string;
  author:string;
  content:string;

  toggleForm: boolean = false;
  myVar: boolean = true;


  // Dependency injection (how we inject our services). 
  constructor(private blogService: BlogService) { }

  // Retrieving data logic from here.
  getBlogs(){
    this.blogService.getBlogs().subscribe( blogs => {
      this.blogs = blogs;
    });
  }

  addBlog(form){
    let newBlog: Blog = {
      title: form.value.blogTitle,
      author: form.value.authorName,
      content: form.value.blogContent
    }
    this.blogService.addBlog(newBlog).subscribe(item => {
      this.getBlogs();
    });
  }

  clickHome(){
    this.toggleForm = false;
    this.myVar = true;
  }

  clickCreate(){
    this.toggleForm = true;
    this.myVar = false;
  }

  ngOnInit() {
    // Everytime component is loaded, automatically retreiving data from this.
    this.getBlogs();
  }
}
