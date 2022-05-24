import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { LoggedInUserModel } from '../models/loggedInUser.model';

@Injectable({providedIn: 'root'})
export class LoginService {
    apiUrl: string = environment.apiUrl
    constructor(private httpClient: HttpClient) { }

    login(loginModel: LoginModel): Observable<LoggedInUserModel>{
        const url = this.apiUrl + '/authenticate'
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            
        return this.httpClient.post<LoggedInUserModel>(url, loginModel, {'headers': headers})
    }
    
} 