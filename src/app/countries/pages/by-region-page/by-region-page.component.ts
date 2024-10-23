import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor(private countriesService:CountryService){

  }

  public countries:Country[] =[];


  searchByRegion(term:string):void{
    this.countriesService.searchRegion(term)
    .subscribe(countries=>{
      this.countries = countries;
    })
  } 

}
