import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-content',
  templateUrl: './dummy-content.component.html',
  styleUrls: ['./dummy-content.component.scss']
})
export class DummyContentComponent implements OnInit {

  text:string="";

  datas =["This is dummy data that should get extended and collapsed on click This is dummy This is dummy data that should get extended and collapsed on click This is dummy This is dummy data that should get extended and collapsed on click This is dummy ",
  "This is dummy data that should get extended and collapsed on click This is dummy data that should get extended and collapsed on clickThis is dummy data that should get extended and collapsed on click This is dummy data that should get extended and collapsed on click This is dummy data that should get extended and collapsed on click This is dummy data that should get extended and collapsed on click This is dummy data that should get extended and collapsed on click This is dummy data that should get extended and collapsed on clickThis is dummy data that should get extended and collapsed on click This is dummy data that should get extended and collapsed on click This is dummy data that should get extended and collapsed on click This is dummy data that should get extended and collapsed on click"
]
constructor() { }

  ngOnInit(): void {
  }

  addText(){
    this.datas.push(this.text);
  }

}
