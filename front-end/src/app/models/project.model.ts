export interface IProject {
    projectID: number;
    projectName: string;
    dateOfStart: string;
    teamSize: number;
}

export class ProjectModel implements IProject{
    projectID: number = 0;
    projectName: string = '';
    dateOfStart: string = new Date().toDateString();
    teamSize: number = 0;
    
    constructor(data?: IProject){
        this.fromJSON(data)
    }
    
    fromJSON(data: IProject | undefined): ProjectModel {
        if(!data) return this
        this.projectID = data.projectID || this.projectID || 0;
        this.projectName = data.projectName || this.projectName || '';
        this.dateOfStart = data.dateOfStart || new Date().toDateString();
        this.teamSize = data.teamSize || this.teamSize || 0;

        return this
    }
    

}
    