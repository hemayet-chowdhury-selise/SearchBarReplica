import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-content',
  templateUrl: './dummy-content.component.html',
  styleUrls: ['./dummy-content.component.scss']
})
export class DummyContentComponent implements OnInit {

  text:string="";

  datas =["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst. Ut morbi tincidunt augue interdum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst. Ut morbi tincidunt augue interdum. Massa id neque aliquam vestibulum morbi blandit cursus. Consequat semper viverra nam libero justo laoreet sit amet. Dictum non consectetur a erat. Sed cras ornare arcu dui vivamus. At varius vel pharetra vel turpis nunc eget lorem dolor. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Leo duis ut diam quam nulla porttitor massa id. Amet mattis vulputate enim nulla aliquet. Sem nulla pharetra diam sit amet. Erat velit scelerisque in dictum non. Lectus vestibulum mattis ullamcorper velit sed"
]
constructor() { }

  ngOnInit(): void {
  }

  addText(){
    this.datas.push(this.text);
  }

}
