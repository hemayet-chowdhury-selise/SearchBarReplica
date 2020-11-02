import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from './search-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "/assets/data/search-items.json";
  constructor(private http: HttpClient) { }

  public get getList() : Observable<SearchItem[]>{
    return this.http.get<SearchItem[]>(this._url);
  }




}
