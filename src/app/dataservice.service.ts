import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  searchList = [
    'Angular', 'React', 'Vue', 'Node', 'Angular Material', 'Semantic HTML', 'Hyper Text Mark-up Language', 'Hemayet', 'Abdun Nahid', 'Asif Adham'
  ];

  constructor() { }
}
