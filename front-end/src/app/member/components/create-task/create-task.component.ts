import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInUserModel } from 'src/app/models/loggedInUser.model';
import { ProjectModel } from 'src/app/models/project.model';
import { TaskModel } from 'src/app/models/task.model';
import { ITaskPriorityModel } from 'src/app/models/taskPriority.model';
import { AccountService } from 'src/app/services/account.service';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {

    listUser$: Observable<LoggedInUserModel[]> = new Observable();
    listProject$: Observable<ProjectModel[]> = new Observable();
    listTaskPriorities$: Observable<ITaskPriorityModel[]> = new Observable();
    taskForm =  new FormGroup({})

    constructor(
        private accService: AccountService,
        private prjService: ProjectService,
        private taskService: TaskService,
        private fb: FormBuilder,
        private route: Router
    ) {}

    ngOnInit(): void {
        this.listProject$ = this.prjService.getProject();
        this.listUser$ = this.accService.getAllUser();
        this.listTaskPriorities$ = this.taskService.getTaskPriorities();
        this.onInitTaskForm();
        
    }

    onInitTaskForm(){
        this.taskForm = this.fb.group({
            taskName: new FormControl('', {validators: [
                Validators.required
            ]}),
            description: new FormControl('', {validators: [
                Validators.required
            ]}),
            projectID: new FormControl(null, {validators: [
                Validators.required
            ]}),
            taskPriorityID: new FormControl(null, {validators: [
                Validators.required
            ]}),
            assignedTo: new FormControl('', {validators: [
                Validators.required
            ]})
        })
    }

    onCreateTask(){
        this.taskService.createTask(new TaskModel(this.taskForm.getRawValue())) 
            .subscribe((result) => {
                if(result){
                    this.route.navigateByUrl('/member')
                }                
            })      
    }
}
