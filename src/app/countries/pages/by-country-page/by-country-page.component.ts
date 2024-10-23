import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  
  public countries:Country[] = [];

  constructor(private countriesService:CountryService ){

  }
 
  searchByCountry(country:string):void{
    this.countriesService.searchCountry(country)
    .subscribe(countries =>{
      this.countries = countries; 
    })
   
  }
  
}
