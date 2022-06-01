import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInUserModel } from 'src/app/models/loggedInUser.model';
import { IGroupedTask } from 'src/app/models/task.model';
import { AccountService } from 'src/app/services/account.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

    taskGroups: IGroupedTask[] = [];
    userLoggedIn: string = ''

    constructor(
        private route: Router, 
        private taskService: TaskService, 
        public accService: AccountService
    ) {
        const loggedInUser: LoggedInUserModel | null = JSON.parse(localStorage.getItem('user') as string)
        if (loggedInUser) {
            this.userLoggedIn = loggedInUser.userName
        }
    }

    ngOnInit(): void {
        this.taskService.getTasks().subscribe((result) => {
            this.taskGroups = result;
        });
    }

    onCreateTask() {
        this.route.navigateByUrl('/member/create-task');
    }

    getTaskGroupBgCssClass(taskStatusName: any): string {
        var className = '';
        switch (taskStatusName) {
            case 'Holding':
                className = 'bg-secondary text-white';
                break;
            case 'Prioritized':
                className = 'bg-primary text-white';
                break;
            case 'Started':
                className = 'bg-info text-white';
                break;
            case 'Finished':
                className = 'bg-success text-white';
                break;
            case 'Reverted':
                className = 'bg-danger text-white';
                break;
        }
        return className;
    }

    getTaskPriorityBadgeCssClass(taskPriorityName: any): string {
        var className = '';
        switch (taskPriorityName) {
            case 'Urgent':
                className = 'bg-danger';
                break;
            case 'Normal':
                className = 'bg-primary';
                break;
            case 'Below Normal':
                className = 'bg-info';
                break;
            case 'Low':
                className = 'bg-secondary';
                break;
        }
        return className;
    }

    getTaskGroupTextCssClass(taskStatusName: any): string {
        var className = '';
        switch (taskStatusName) {
            case 'Holding':
                className = 'text-secondary';
                break;
            case 'Prioritized':
                className = 'text-primary';
                break;
            case 'Started':
                className = 'text-info';
                break;
            case 'Finished':
                className = 'text-success';
                break;
            case 'Reverted':
                className = 'text-danger';
                break;
        }
        return className;
    }
}
