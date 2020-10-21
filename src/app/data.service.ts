import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  searchList = [
    'angular', 'react', 'vue', 'node', 'angular material', 'semantic html', 'hyper text mark-up language'
  ];

  constructor() { }

  getList(){
    return [...this.searchList];
  }

}
