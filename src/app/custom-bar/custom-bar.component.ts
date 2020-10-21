import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {SearchFilterPipe} from '../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { DataserviceService } from '../data.service';

@Component({
  selector: 'app-custom-bar',
  templateUrl: './custom-bar.component.html',
  styleUrls: ['./custom-bar.component.scss'],
  providers: [ SearchFilterPipe ]
})


export class CustomBarComponent implements OnInit {


  @ViewChildren('suggestions') private boxes: QueryList<ElementRef>;

  showDropDown = false;
  searchTerm = "";
  index: number = 0;
  hoverme = true;
  focusFlag = false;
  searchList ;

  constructor(private dataService : DataserviceService, private ElementRef:ElementRef) { }

  ngOnInit(): void {
    this.searchList = this.dataService.getList();

  }

  //arrow navigation functions

  onMouseOver(index: number){

    this.index = index;
    this.boxes.toArray()[index].nativeElement.focus();
  }

  closeDropDown(){
    this.showDropDown = false;
  }

  selectValue(s){
    this.searchTerm = s;
    console.log(this.searchTerm);
    this.showDropDown = false;
  }

  onSearchBarKeyDown(event){
    console.log(event.key);
    if(event.key=="ArrowDown"){
      this.boxes.toArray()[0].nativeElement.focus();
    }
    if(event.key=="ArrowUp"){
      this.boxes.toArray()[this.boxes.toArray().length-1].nativeElement.focus();
    }
  }

  onItemKeyDown(event, s: string){
    console.log(event.key);

    if(event.key=="ArrowDown"){
      this.index = (this.index+1)%this.boxes.toArray().length;
      this.boxes.toArray()[this.index].nativeElement.focus()
    }
    else if(event.key=="ArrowUp"){
      if(this.index==0) this.index = this.boxes.toArray().length-1;
      else this.index=((this.index-1)%this.boxes.toArray().length)
      this.boxes.toArray()[this.index].nativeElement.focus()
    }
    else if(event.key=="Enter"){
      this.selectValue(s);
    }
  }

  removeItem(event: Event){
    event.stopPropagation();
    console.log("clear clicked");
    this.searchList.splice(this.index,1);
  }



}
