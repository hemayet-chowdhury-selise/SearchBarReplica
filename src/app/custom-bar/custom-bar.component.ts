import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {SearchFilterPipe} from '../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-bar',
  templateUrl: './custom-bar.component.html',
  styleUrls: ['./custom-bar.component.scss'],
  providers: [ SearchFilterPipe ]
})


export class CustomBarComponent implements OnInit {


  @ViewChildren('suggestions') private boxes: QueryList<ElementRef>;
  @ViewChild('searchBar') private bar: ElementRef;

  showDropDown: boolean = false;
  searchTerm: string = "";
  innerSearchTerm: string="";
  index: number = 0;
  hoverme: boolean = true;
  focusFlag: boolean = false;
  searchList: string[] ;

  constructor(private dataService : DataService, private ElementRef:ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.searchList = this.dataService.getList;

  }

  //arrow navigation functions

  onSearchBarClick(): void{
    this.innerSearchTerm = this.searchTerm;
    this.showDropDown = true;
    this.index = 0;
  }

  onMouseOver(index: number): void{

    this.index = index;

  }

  closeDropDown(): void{
    this.showDropDown = false;
  }

  selectValue(s): void{
    var res = s.split(" ");
    res = res.slice(1, res.length-1);
    res = res.join(' ');
    this.searchTerm = res;
    console.log(this.searchTerm);

  }

  browseValue(s): void{
    var res = s.split(" ");
    res = res.slice(1, res.length-1);
    res = res.join(' ');
    this.searchTerm = res;
    this.searchTerm = res;

    console.log(this.searchTerm);

  }

  onSearchBarKeyDown(event): void{
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



  onSearchBarKeyUp(event): void{

    if(event.key=="ArrowDown"){
     // this.index = (this.index+1)%this.boxes.toArray().length;
    //  this.browseValue(this.boxes.toArray()[this.index].nativeElement.textContent);
      console.log(event.key);
    }
    else if(event.key=="ArrowUp"){

      //if(this.index<=0) this.index = this.boxes.toArray().length-1;
     // else this.index=((this.index-1)%this.boxes.toArray().length);
      // this.selectValue(this.boxes.toArray()[this.index].nativeElement.textContent);
      console.log(event.key);
    }
    else if(event.key=="Enter"){

      this.selectValue(this.boxes.toArray()[this.index].nativeElement.textContent);
      this.innerSearchTerm = this.searchTerm;
      this.router.navigate(['/readmore'],  { queryParams: { search: this.innerSearchTerm } });

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


  removeItem(event: Event): void{
    event.stopPropagation();

    this.searchList.splice(this.index,1);
  }

  onItemClick(s : string): void{
    this.selectValue(s);
    this.innerSearchTerm = this.searchTerm;
    this.router.navigate(['/readmore'],  { queryParams: { search: this.innerSearchTerm } });
  }



}
