export interface ITaskModel {
    taskID: number;
    taskName: string;
    description: string;
    createdOn: Date;
    projectID: number;
    createdBy: string;
    assignedTo: string;
    taskPriorityID: number;
    lastUpdatedOn: Date;
    currentStatus: string;
    currentTaskStatusID: number;
    createdOnString: string;
    lastUpdatedOnString: string;
    project: any;
    createdByUser: any;
    assignedToUser: any;
    taskPriority: any;
    taskStatusDetails: any[];
}

export interface IGroupedTask{
    taskStatusName: number;
    tasks: ITaskModel[];
}



export class TaskModel implements ITaskModel {
    taskID: number = 0;
    taskName: string = '';
    description: string = '';
    createdOn: Date = new Date(Date.now());
    projectID: number = 0;
    createdBy: string = '';
    assignedTo: string = '';
    taskPriorityID: number = 0;
    lastUpdatedOn: Date = new Date(Date.now());
    currentStatus: string = '';
    currentTaskStatusID: number = 0;
    createdOnString: string = '';
    lastUpdatedOnString: string = '';
    project: Object = {};
    createdByUser: Object = {};
    assignedToUser: Object = {};
    taskPriority: Object = {};
    taskStatusDetails: [] = [];

    constructor(data: ITaskModel | any) {
        this.fromJSON(data);
    }

    fromJSON(data: any): TaskModel {
        if (!data) return this;
        this.taskName = data.taskName || this.taskName;
        this.description = data.description || this.description;
        this.projectID = data.projectID || this.projectID;
        this.assignedTo = data.assignedTo || this.assignedTo;
        this.taskPriorityID = data.taskPriorityID || this.taskPriorityID;

        return this;
    }

    toJSON(): ITaskModel {
        return {
            taskID: this.taskID,
            taskName: this.taskName,
            description: this.description,
            createdOn: this.createdOn,
            projectID: this.projectID,
            createdBy: this.createdBy,
            assignedTo: this.assignedTo,
            taskPriorityID: this.taskPriorityID,
            lastUpdatedOn: this.lastUpdatedOn,
            currentStatus: this.currentStatus,
            currentTaskStatusID: this.currentTaskStatusID,
            createdOnString: this.createdOnString,
            lastUpdatedOnString: this.lastUpdatedOnString,
            project: this.project,
            createdByUser: this.createdByUser,
            assignedToUser: this.assignedToUser,
            taskPriority: this.taskPriority,
            taskStatusDetails: this.taskStatusDetails,
        };
    }
}
