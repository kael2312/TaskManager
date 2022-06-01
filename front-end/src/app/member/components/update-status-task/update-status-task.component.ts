import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
    
    TaskModel,
} from 'src/app/models/task.model';
import { ITaskStatus, TaskStatusDetailModel } from 'src/app/models/taskStatus.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
    selector: 'app-update-status-task',
    templateUrl: './update-status-task.component.html',
    styleUrls: ['./update-status-task.component.scss'],
})
export class UpdateStatusTaskComponent implements OnInit {
    editTaskStatusForm = new FormGroup({});
    taskID: number = 0;
    taskStatuses$: Observable<ITaskStatus[]> = new Observable();

    constructor(
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private taskService: TaskService,
        private route: Router
    ) {
        this.activatedRoute.params.subscribe((params) => {
            this.taskID = params['taskID'];
        });
    }

    ngOnInit(): void {
        this.initTaskStatusForm();

        //get taskstatuses from db for dropdownlist
        this.taskStatuses$ = this.taskService.getTaskStatus();
    }

    initTaskStatusForm() {
        this.editTaskStatusForm = this.fb.group({
            taskID: new FormControl(this.taskID),
            taskStatusID: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required]),
        });
    }

    onChangeTaskStatus(){
        this.taskService.updateTaskStatus(new TaskStatusDetailModel(this.editTaskStatusForm.getRawValue()))
            .subscribe((result) => {
                if(result){
                    this.route.navigateByUrl('/member')
                }
            })
    }
}
