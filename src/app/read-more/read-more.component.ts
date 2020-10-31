import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  @ContentChild("readMore", { read: ElementRef }) readMore: ElementRef;

  @ViewChild('targetDiv') targetDiv : ElementRef;

  extended: boolean = false;
  necessary: boolean = false;


  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    setTimeout(()=>{
      console.log(this.targetDiv.nativeElement.offsetHeight+" "+this.targetDiv.nativeElement.scrollHeight);

      this.necessary = this.targetDiv.nativeElement.offsetHeight<this.targetDiv.nativeElement.scrollHeight;
      if(this.necessary==false) this.extended = false;

      console.log("before resize"+ this.necessary);
    });
  }



  onResize(){
    this.necessary = this.targetDiv.nativeElement.offsetHeight<this.targetDiv.nativeElement.scrollHeight;
    if(this.necessary==false) this.extended = false;
    console.log("just resized"+ this.necessary);

  }



  toggleExtended(){
    this.extended = !this.extended;
    this.necessary = !this.necessary;

  }

  checkOverflow (element): boolean {


    if (element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth) {
      return true;
    } else {


      return false;
    }
  }

}
