import { Injectable } from '@angular/core';
import { CityDataService } from './city-data.service';

@Injectable({
  providedIn: 'root'
})
export class RecyclingService {

  constructor(private cityDataService: CityDataService) { }


}
