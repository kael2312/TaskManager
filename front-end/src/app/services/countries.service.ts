import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class CountriesService {
    private apiUrl = environment.apiUrl;
    url = this.apiUrl + `/api/countries`;
    
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<CountryModel[]>{
        return this.httpClient
            .get<CountryModel[]>(this.url)
    }
    
}