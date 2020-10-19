import { Component, OnInit } from '@angular/core';
import {SearchFilterPipe} from '../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-custom-bar',
  templateUrl: './custom-bar.component.html',
  styleUrls: ['./custom-bar.component.scss'],
  providers: [ SearchFilterPipe ]
})


export class CustomBarComponent implements OnInit {

  dropDownFlag = false;
  searchTerm = "";




  public searchList = [
    'Angular', 'React', 'Vue', 'Node', 'Angular Material', 'Semantic HTML', 'Hyper Text Mark-up Language', 'Hemayet', 'Abdun Nahid', 'Asif Adham'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.dropDownFlag = !this.dropDownFlag;
  }

  closeDropDown(){
    this.dropDownFlag = false;
  }

  selectValue(s){

    this.searchTerm = s;
    console.log(this.searchTerm);
    this.dropDownFlag = false;
  }

}
