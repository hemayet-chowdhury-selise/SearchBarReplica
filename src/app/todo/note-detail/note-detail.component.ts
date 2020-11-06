
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../shared/post';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  id : number;
  post : Post;
  doneCancelState: string = "Done";
  editSaveState:string = "Edit";
  editFlag: boolean = false;

  @ViewChild('noteInput') noteInput: ElementRef;
  @ViewChild('titleInput') titleInput: ElementRef;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      if(params.get("edit")=="edit"){
        this.editFlag = true;
        this.doneCancelState = "Cancel";
        this.editSaveState = "Save";

      }
      this.id = +params.get("id")
      this.post = this.postService.getPostById(this.id);
    })
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if(this.editFlag) this.titleInput.nativeElement.focus();
  }

  onEditSave(): void{
      if(this.editFlag){
        let note  = this.noteInput.nativeElement.textContent;
        let title  = this.titleInput.nativeElement.textContent;
        this.postService.editPost(title,note, this.id);
        this.router.navigate(['/note/'+this.id]);
      }
      else{

        this.router.navigate(['/note/'+this.id+'/edit']);
      }

  }
  onDoneCancel():void{
      if(this.editFlag){
        this.router.navigate(['/note/'+this.id]);
      }
      else{
        this.router.navigate(['/']);
      }
  }

  onDelete():void{
    this.postService.deletePost(this.id);
    this.router.navigate(['/']);
  }

}
