import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  @ViewChild('targetDiv') targetDiv : ElementRef;

  extended: boolean = false;
  showReadMore: boolean = false;


  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.showReadMore = this.checkOverflow(this.targetDiv);
      if(this.showReadMore==false) this.extended = false;
    });
  }





  onResize(): void{
    this.showReadMore = this.checkOverflow(this.targetDiv);
    if(this.showReadMore==false) this.extended = false;
  }



  toggleExtended() : void{
    this.extended = !this.extended;
    this.showReadMore = !this.showReadMore;

  }

  checkOverflow (element: ElementRef): boolean {
    if (element.nativeElement.offsetHeight < element.nativeElement.scrollHeight ||
        element.nativeElement.offsetWidth < element.nativeElement.scrollWidth) {
      return true;
    } else {
      return false;
    }
  }

}
