import { Component, OnInit } from '@angular/core';
import { LoggedInUserModel } from './models/loggedInUser.model';
import { AccountService } from './services/account.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    userRole: string = 'Public'

    constructor(
        public accService: AccountService
    ){}

    ngOnInit(): void {
        this.accService.currentUser$
            .subscribe((loggedInUser: LoggedInUserModel | null) => {
                if (loggedInUser) {
                    this.userRole = loggedInUser.role   
                }else{
                    this.userRole = 'Public'
                }                             
            })
    }
    title = 'TaskManager';
   
}
