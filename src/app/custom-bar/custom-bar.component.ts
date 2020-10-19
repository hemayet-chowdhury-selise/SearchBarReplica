import { Component, OnInit } from '@angular/core';
import {SearchFilterPipe} from '../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-custom-bar',
  templateUrl: './custom-bar.component.html',
  styleUrls: ['./custom-bar.component.scss'],
  providers: [ SearchFilterPipe ]
})


export class CustomBarComponent implements OnInit {

  dropDownFlag = false;
  searchTerm = "";




 searchList ;

  constructor(private dataService : DataserviceService) { }

  ngOnInit(): void {
    this.searchList = this.dataService.searchList;
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
