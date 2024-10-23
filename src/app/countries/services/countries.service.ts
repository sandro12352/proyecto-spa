import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable,of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryService {
    constructor(private http: HttpClient) { }

    private apiUrl:string = "https://restcountries.com/v3.1";


    searchCountryAlphaCode(code:string):Observable<Country|null>{
        const ulr = `${this.apiUrl}/alpha/${code}`;
        return this.http.get<Country[]>(ulr)
        .pipe(
            map(countries=>countries.length>0?countries[0]:null ),
            catchError(()=> of(null))
        );
    }



    searchCapital(term:string):Observable<Country[]>{
        const ulr = `${this.apiUrl}/capital/${term}`
        return this.http.get<Country[]>(ulr)
        .pipe(
            catchError(()=> of([]))
        );
    }


    searchCountry(term:string):Observable<Country[]>{
        const ulr = `${this.apiUrl}/name/${term}`
        return this.http.get<Country[]>(ulr)
        .pipe(
            catchError(()=> of([]))
        );
    }


    searchRegion(term:string):Observable<Country[]>{
        const ulr = `${this.apiUrl}/region/${term}`
        return this.http.get<Country[]>(ulr)
        .pipe(
            catchError(()=> of([]))
        );
    }


}