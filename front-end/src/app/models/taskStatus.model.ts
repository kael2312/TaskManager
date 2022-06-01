export interface ITaskStatusDetail{
    taskStatusDetailID: number;
    taskID: number;
    taskStatusID: number;
    userID: string;
    description: string;
    taskstatus: any;
    user: any;
    statusUpdationDateTime: Date;
    statsUpdationDateTimeString: string;
}

export interface ITaskStatus{
    taskStatusID: number;
    taskStatusName: string;
}


export class TaskStatusDetailModel implements ITaskStatusDetail{
    taskStatusDetailID: number = 0;
    taskID: number = 0;
    taskStatusID: number = 0;
    userID: string = '';
    description: string = '';
    taskstatus: any = {};
    user: any;
    statusUpdationDateTime: Date = new Date(Date.now());
    statsUpdationDateTimeString: string = '';

    constructor(data: ITaskStatusDetail){
        this.fromJSON(data)
    }

    fromJSON(data: ITaskStatusDetail): TaskStatusDetailModel {
        if(!data) return this;
        this.taskID = data.taskID;
        this.taskStatusID = data.taskStatusID;
        this.description = data.description;

        return this
    }

    toJSON(): ITaskStatusDetail{
        return {
            taskStatusDetailID: this.taskStatusDetailID,
            taskID: this.taskID,
            taskStatusID: this.taskStatusID,
            userID: this.userID,
            description: this.description,
            taskstatus: this.taskstatus,
            user: this.user,
            statusUpdationDateTime: this.statusUpdationDateTime,
            statsUpdationDateTimeString: this.statsUpdationDateTimeString
        }
    }

}