import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { LoggedInUserModel } from '../models/loggedInUser.model';
import { SignUpModel } from '../models/signUp.model';

@Injectable({providedIn: 'root'})
export class AccountService {
    apiUrl: string = environment.apiUrl
    constructor(private httpClient: HttpClient) { }

    login(loginModel: LoginModel): Observable<LoggedInUserModel>{
        const url = this.apiUrl + '/authenticate'
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            
        return this.httpClient.post<LoggedInUserModel>(url, loginModel, {'headers': headers})
    }

    register(data: SignUpModel): Observable<LoggedInUserModel>{
        const url = this.apiUrl + '/register'
        return this.httpClient.post<LoggedInUserModel>(url, data.toJSON())
    }

    getUserByEmail(email: string): Observable<LoggedInUserModel>{
        const url = this.apiUrl + `/api/getUserByEmail/${email}`
        return this.httpClient.get<LoggedInUserModel>(url)
    }
    
} 