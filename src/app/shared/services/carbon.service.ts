import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarbonService {

  carbonDat: any = [];

  constructor(private httpClient: HttpClient) {}

  getCo2() {
    this.httpClient.get('assets/Co2.json').subscribe((data) => {
      console.log(data);
      this.carbonDat = data;
    });
  }
}
