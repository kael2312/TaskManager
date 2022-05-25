import { ClientLocationModel, IClientLocation } from "./clientLocation.model";

export interface IProject {
    projectID: number;
    projectName: string;
    dateOfStart: Date;
    teamSize: number;
    active: boolean;
    status: string;
    clientLocationID: number;
}

export class ProjectModel implements IProject{
    projectID: number = 0;
    projectName: string = '';
    dateOfStart: Date = new Date(Date.now());
    teamSize: number = 0;
    active: boolean = false;
    status: string = '';
    clientLocationID: number = 0;
    private _clientLocation: IClientLocation = new ClientLocationModel()
    
    constructor(data?: IProject){
        this.fromJSON(data)
    }    
    
    fromJSON(data: IProject | any): ProjectModel {
        if(!data) return this
        this.projectID = data.projectID || this.projectID || 0;
        this.projectName = data.projectName || this.projectName || '';
        this.dateOfStart = data.dateOfStart || new Date(Date.now());
        this.teamSize = data.teamSize || this.teamSize || 0;
        this.active = data.active || this.active || false;
        this.status = data.status || this.status || '';
        this.clientLocationID = data.clientLocationID || this.clientLocationID || 0
        this._clientLocation = data.clientLocation || null

        return this
    }

    get clientLocation(): ClientLocationModel{
        if (this._clientLocation) {
            return new ClientLocationModel(this._clientLocation)
        }
        return this.clientLocation
    }
    

}
    