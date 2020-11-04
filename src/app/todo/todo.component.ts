import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './shared/post';
import { PostService } from './shared/post.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @ViewChild('noteInput') noteInput: ElementRef;
  @ViewChild('titleInput') titleInput: ElementRef;
  note : string;
  title: string;
  postList : Post[] = [];
  showTitle:boolean =  false;
  postListSubscription: Subscription;

  constructor(private postService: PostService, private elementRef:ElementRef) { }



  ngOnInit(): void {
    this.postList = this.postService.getPostList;
    this. postListSubscription = this.postService.postListMessage.subscribe((postList)=>{
      this.postList = postList;
    });
  }


  onAddNote(){
    console.log("still in component. adding started");
    this.postService.addPost(this.title, this.note);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postListSubscription.unsubscribe();
  }

  autogrow() {
    let textArea = this.noteInput.nativeElement;

    textArea.style.height = 'auto';

    textArea.style.height = textArea.scrollHeight + 'px';
}

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
     if (this.noteInput.nativeElement.contains(event.target) || this.titleInput.nativeElement.contains(event.target) ) {
        // clicked outside => close dropdown list
     this.showTitle = true;
     }
     else{
      this.onAddNote();
       this.showTitle= false;

     }
  }

}
