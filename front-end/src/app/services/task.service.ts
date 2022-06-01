import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ITaskPriorityModel } from '../models/taskPriority.model';
import {
    IGroupedTask,
    TaskModel,
} from '../models/task.model';
import { ITaskStatus, TaskStatusDetailModel } from '../models/taskStatus.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
    apiUrl = environment.apiUrl;
    constructor(private httpClient: HttpClient) {}

    getTaskPriorities(): Observable<ITaskPriorityModel[]> {
        const url = this.apiUrl + '/api/taskpriorities';
        return this.httpClient.get<ITaskPriorityModel[]>(url);
    }

    createTask(data: TaskModel): Observable<TaskModel> {
        const url = this.apiUrl + '/api/createtask';
        return this.httpClient.post<TaskModel>(url, data.toJSON());
    }

    getTasks(): Observable<IGroupedTask[]> {
        const url = this.apiUrl + '/api/tasks';
        return this.httpClient.get<IGroupedTask[]>(url);
    }

    getTaskStatus(): Observable<ITaskStatus[]> {
        const url = this.apiUrl + '/api/taskstatuses';
        return this.httpClient.get<ITaskStatus[]>(url);
    }

    getTaskByTaskID(taskID: number): Observable<TaskModel> {
        const url = this.apiUrl + `/api/tasks/searchbytaskid/${taskID}`;
        return this.httpClient.get<TaskModel>(url);
    }

    updateTaskStatus(
        taskStatusDetail: TaskStatusDetailModel
    ): Observable<TaskStatusDetailModel> {
        const url = this.apiUrl + '/api/updatetaskstatus';

        return this.httpClient.put<TaskStatusDetailModel>(
            url,
            taskStatusDetail.toJSON(),
            { responseType: 'json' }
        );
    }
}
