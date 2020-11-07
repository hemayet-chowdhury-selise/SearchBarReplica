import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList: Post[] =[ {title: 'First Note', note: 'Testing things out', created: new Date()},
  {title: 'Second Note', note: 'Kept theme similar to Google Keep, thereby, all the whiteness.', created: new Date()},
  {title: 'Third Note', note: 'Edit and make me 4th note', created: new Date()},
  {title: 'Third Note', note: 'Architecture of our search bar is different from theirs due to obvious reasons.', created: new Date()},
];

public postListMessage = new Subject<Post[]>();


  constructor() {
    this.postListMessage.next(JSON.parse(JSON.stringify(this.postList)));
   }


  public get getPostList() : Post[] {
    return JSON.parse(JSON.stringify(this.postList));
  }

  getPostById(id: number): Post{
    return JSON.parse(JSON.stringify(this.postList[id]));
  }

  addPost(title, note){
    console.log("inside service. adding now");
    this.postList.push({title: title,
    note: note,
    created: new Date()

  });
  this.postListMessage.next(JSON.parse(JSON.stringify(this.postList)));
  }

  editPost(title, note, id):void{

    this.postList[id] = {
      title: title,
      note:note,
      created: new Date()
    }
    this.postListMessage.next(JSON.parse(JSON.stringify(this.postList)));
  }

  deletePost(id: number):void{
    console.log("we are deleting now");
    this.postList.splice(id,1);
    this.postListMessage.next(JSON.parse(JSON.stringify(this.postList)));
  }


}
