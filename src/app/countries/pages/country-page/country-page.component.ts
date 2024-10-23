import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?:Country;

  constructor(
    private activateRoute:ActivatedRoute ,
    private router:Router,
    private countriesService:CountryService,
  ){}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id})=>this.countriesService.searchCountryAlphaCode(id))
    )
    .subscribe(country=>{
      if(!country){
        return this.router.navigateByUrl('');
      }
      this.country = country;
      return
      
    })
  }
}
  