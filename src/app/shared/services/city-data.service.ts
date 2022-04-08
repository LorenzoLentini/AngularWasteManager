import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Trash } from '../classes/Trash';

@Injectable({
  providedIn: 'root'
})
export class CityDataService {

  private trashesData: any = [];
  private servicesData: any = [];
  private cityUrl = "assets/data.json"

  constructor(private http: HttpClient){}


    getDatas() {
      return this.http.get('assets/data.json');
    }

}
