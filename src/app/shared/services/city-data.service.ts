import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityDataService {

  cityDat: any = [];


  constructor(private httpClient: HttpClient){}
  getDatas(){
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.cityDat = data;
    });
}
}
