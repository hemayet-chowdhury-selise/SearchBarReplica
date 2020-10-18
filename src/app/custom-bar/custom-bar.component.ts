import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-bar',
  templateUrl: './custom-bar.component.html',
  styleUrls: ['./custom-bar.component.scss']
})
export class CustomBarComponent implements OnInit {

  dropDownFlag = false;



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

}
