import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';
import { map, Observable, ReplaySubject } from 'rxjs';
import { LoggedInUserModel } from '../models/loggedInUser.model';
import { SignUpModel } from '../models/signUp.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AccountService {
    apiUrl: string = environment.apiUrl;
    private currentUserSource = new ReplaySubject<LoggedInUserModel | null>(1);
    currentUser$ = this.currentUserSource.asObservable();
    constructor(private httpClient: HttpClient, private route: Router) {}

    login(loginModel: LoginModel): Observable<LoggedInUserModel> {
        const url = this.apiUrl + '/authenticate';
        const jwtHelper = new JwtHelperService();

        return this.httpClient.post<LoggedInUserModel>(url, loginModel).pipe(
            map((result: LoggedInUserModel) => {
                if (result) {
                    localStorage.setItem('token', result.token);
                    this.changeCurrentUserSource(result)
                    if (jwtHelper.decodeToken(result.token).role === 'Admin') {
                        this.route.navigateByUrl('/admin/project');
                    } else if (
                        jwtHelper.decodeToken(result.token).role === 'Member'
                    ) {
                        this.route.navigateByUrl('/member');
                    }
                }
                return result;
            })
        );
    }

    register(data: SignUpModel): Observable<LoggedInUserModel> {
        const url = this.apiUrl + '/register';
        return this.httpClient.post<LoggedInUserModel>(url, data.toJSON());
    }

    getUserByEmail(email: string): Observable<LoggedInUserModel> {
        const url = this.apiUrl + `/api/getUserByEmail/${email}`;
        return this.httpClient.get<LoggedInUserModel>(url);
    }

    changeCurrentUserSource(loggedInUser: LoggedInUserModel){
        localStorage.setItem('user', JSON.stringify(loggedInUser));
        this.currentUserSource.next(loggedInUser);
    }

    logOut(){
        this.currentUserSource.next(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.route.navigate(['/']);
    }
}
