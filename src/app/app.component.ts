import { Component } from '@angular/core';
import { CityDataService} from './shared/services/city-data.service';
import { CarbonService } from './shared/services/carbon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-waste-manager';

  quartiers: any = [];
  services: any = [];
  carbon: any = [];
  dataCollection: any;

  constructor(private cityDataService: CityDataService, carbonService: CarbonService){}
  ngOnInit(){

    this.cityDataService.getDatas().subscribe(data => {
      this.dataCollection = data;
      this.quartiers = this.dataCollection.quartiers;
      this.services = this.dataCollection.services;
      console.log(this.quartiers, this.services)
  })
  }

}
