
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input('title') title: String;
  @Input('note') note: String;
  @Input('postId') id: number;
  @ViewChild('optionsDiv') optionsDiv: ElementRef;
  @ViewChild('more') more: ElementRef;
  showIcons:boolean =  false;
  showModal:boolean = false;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }


  onToggleIcons(){
    if(this.showModal==true){
      this.showIcons = true;
    }
    else this.showIcons = !this.showIcons;
  }

  onOtherIconClick(){
    event.stopPropagation();
  }

  onOptionsClick(){
    event.stopPropagation();

    this.showModal = !this.showModal;
    return;


  }

  onOptionsSelected(){
    event.stopPropagation();

    this.router.navigate(['/note/'+this.id+'/edit']);
  }

  onItemDelete(){
    event.stopPropagation();


    this.postService.deletePost(this.id);
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {

    if(this.optionsDiv==undefined){

    }
    else if (this.optionsDiv.nativeElement.contains(event.target) ) {
      // clicked outside => close dropdown list

   }
   else{
    this.showModal = false;
    }


  }


}
