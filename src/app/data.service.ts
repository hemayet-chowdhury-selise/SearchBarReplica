import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchList = [
    'angular', 'react', 'node', 'angular material', 'semantic html', 'hyper text mark-up language'
  ];

  constructor() { }

  getList(){
    return JSON.parse(JSON.stringify(this.searchList));
  }

}
