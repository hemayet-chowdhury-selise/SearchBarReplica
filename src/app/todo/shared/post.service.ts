import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {


public postListMessage = new Subject<Post[]>();


  constructor() {
    var postList = localStorage.getItem("postList");
    this.postListMessage.next(JSON.parse(postList));
   }


  public get getPostList() : Post[] {
    return JSON.parse( localStorage.getItem("postList"));
  }

  getPostById(id: number): Post{
    var postList = JSON.parse( localStorage.getItem("postList"))
    return postList[id];
  }

  addPost(title, note){
    console.log("inside service. adding now");
    var postList = JSON.parse( localStorage.getItem("postList"));
    postList.push({title: title,
    note: note,
    created: new Date()

  });
  this.postListMessage.next(JSON.parse(JSON.stringify(postList)));
  localStorage.setItem("postList",JSON.stringify(postList));
  }

  editPost(title, note, id):void{
    var postList = JSON.parse( localStorage.getItem("postList"));
    postList[id] = {
      title: title,
      note:note,
      created: new Date()
    }
    this.postListMessage.next(JSON.parse(JSON.stringify(postList)));
    localStorage.setItem("postList",JSON.stringify(postList));
  }

  deletePost(id: number):void{
    console.log("we are deleting now");
    var postList = JSON.parse( localStorage.getItem("postList"));
    postList.splice(id,1);
    this.postListMessage.next(JSON.parse(JSON.stringify(postList)));
    localStorage.setItem("postList",JSON.stringify(postList));
  }


}
