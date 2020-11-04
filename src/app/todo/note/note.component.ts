import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input('title') title: String;
  @Input('note') note: String;

  constructor() { }

  ngOnInit(): void {
  }

}
