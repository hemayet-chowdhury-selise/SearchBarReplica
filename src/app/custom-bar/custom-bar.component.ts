import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {SearchFilterPipe} from '../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-custom-bar',
  templateUrl: './custom-bar.component.html',
  styleUrls: ['./custom-bar.component.scss'],
  providers: [ SearchFilterPipe ]
})


export class CustomBarComponent implements OnInit {


  @ViewChildren('suggestions') private boxes: QueryList<ElementRef>;
  @ViewChild('searchBar') private bar: ElementRef;

  showDropDown = false;
  searchTerm = "";
  innerSearchTerm="";
  index: number = 0;
  hoverme = true;
  focusFlag = false;
  searchList ;

  constructor(private dataService : DataService, private ElementRef:ElementRef) { }

  ngOnInit(): void {
    this.searchList = this.dataService.searchList;

  }

  //arrow navigation functions

  onSearchBarClick(){
    this.innerSearchTerm = this.searchTerm;
    this.showDropDown = true;
    this.index = 0;
  }

  onMouseOver(index: number){

    this.index = index;

  }

  closeDropDown(){
    this.showDropDown = false;
  }

  selectValue(s){
    var res = s.split(" ");
    res = res.slice(1, res.length-1);
    res = res.join(' ');
    this.searchTerm = res;
    console.log(this.searchTerm);

  }

  browseValue(s){
    var res = s.split(" ");
    res = res.slice(1, res.length-1);
    res = res.join(' ');
    this.searchTerm = res;
    this.searchTerm = res;

    console.log(this.searchTerm);

  }

  onSearchBarKeyDown(event){
    console.log(event.key);
    if(event.key=="ArrowDown"){
      this.index = (this.index+1)%this.boxes.toArray().length;
      if(this.boxes.toArray()[this.index]){
        this.browseValue(this.boxes.toArray()[this.index].nativeElement.textContent);
      }



    }
    else if(event.key=="ArrowUp"){
      event.preventDefault();
      if(this.index<=0) this.index = this.boxes.toArray().length-1;
      else this.index=((this.index-1)%this.boxes.toArray().length);
      if(this.boxes.toArray()[this.index]){
        this.browseValue(this.boxes.toArray()[this.index].nativeElement.textContent);
      }


    }

  }



  onSearchBarKeyUp(event){
    console.log(event.key);
    if(event.key=="ArrowDown"){
     // this.index = (this.index+1)%this.boxes.toArray().length;
    //  this.browseValue(this.boxes.toArray()[this.index].nativeElement.textContent);

    }
    else if(event.key=="ArrowUp"){

      //if(this.index<=0) this.index = this.boxes.toArray().length-1;
     // else this.index=((this.index-1)%this.boxes.toArray().length);
      // this.selectValue(this.boxes.toArray()[this.index].nativeElement.textContent);

    }
    else if(event.key=="Enter"){

      this.selectValue(this.boxes.toArray()[this.index].nativeElement.textContent);
      this.innerSearchTerm = this.searchTerm;

    }
    else if(event.key=="ArrowLeft"){



    }
    else if(event.key=="ArrowRight"){



    }
    else if(event.key=="Backspace"){
      this.innerSearchTerm = this.searchTerm;
      console.log("inner search term is "+this.innerSearchTerm);
      console.log("\nsearch term is "+this.searchTerm);
      console.log("bar value is "+ this.bar.nativeElement.value);
    }
    else if(event.key){
      this.innerSearchTerm = this.searchTerm;
      this.index=-1
    }

  }


  removeItem(event: Event){
    event.stopPropagation();

    this.searchList.splice(this.index,1);
  }



}
