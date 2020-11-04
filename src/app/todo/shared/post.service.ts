import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList: Post[] =[ {title: 'First Note', note: 'Testing things out'},
  {title: 'Second Note', note: 'Testing things again'},
  {title: 'Third Note', note: 'Time is a flat circle'}
];

public postListMessage = new Subject<Post[]>();


  constructor() {
    this.postListMessage.next(JSON.parse(JSON.stringify(this.postList)));
   }


  public get getPostList() : Post[] {
    return JSON.parse(JSON.stringify(this.postList));
  }

  addPost(title, post){
    console.log("inside service. adding now");
    this.postList.push({title: title,
    note: post

  });
  this.postListMessage.next(JSON.parse(JSON.stringify(this.postList)));
  }

}
