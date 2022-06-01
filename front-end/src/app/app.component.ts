import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        public accService: AccountService,
        private route: Router
    ){
        const loggedInUser: LoggedInUserModel | null = JSON.parse(localStorage.getItem('user') as string)
        if (loggedInUser) {
            this.accService.changeCurrentUserSource(loggedInUser);
            this.userRole = loggedInUser.role;
            if (this.userRole === 'Admin') {
                this.route.navigateByUrl('/admin')
            }else if (this.userRole === 'Member') {
                this.route.navigateByUrl('/member')
            }
        }
    }

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
