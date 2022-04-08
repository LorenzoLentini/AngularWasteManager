import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarbonService {


  constructor(private httpClient: HttpClient) {}

  private carbonData: any = [];

  getCo2() {
    return this.httpClient.get('assets/Co2.json');

  }
}

/* REMINDER

"plastiques": {
  "PET":
  "PVC":
  "PC":
  "PEHD":
},
"papier":
"organique"
"verre":
"metaux":
"autre":

*/
