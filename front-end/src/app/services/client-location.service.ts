import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ClientLocationModel } from '../models/clientLocation.model';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ClientLocationService {
    constructor(private httpClient: HttpClient) { }

    private apiUrl = environment.apiUrl;
    url = this.apiUrl + `/api/clientlocations`;
    

    getAll(): Observable<ClientLocationModel[]>{
        return this.httpClient
            .get<ClientLocationModel[]>(this.url)
            .pipe(
                map((result) => 
                    result.map(clientlocation => new ClientLocationModel(clientlocation) )
                )
                
            );
    }
}