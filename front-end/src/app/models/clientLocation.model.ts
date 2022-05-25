export interface IClientLocation{
    clientLocationID: number;
    clientLocationName: string
}


export class ClientLocationModel implements IClientLocation {
    clientLocationID: number = 0;
    clientLocationName: string = '';

    constructor(data?: IClientLocation){        
        this.fromJSON(data as IClientLocation)
    }

    fromJSON(data: IClientLocation): ClientLocationModel {
        if(!data) return this;
        this.clientLocationID = data.clientLocationID || 0;
        this.clientLocationName = data.clientLocationName || ''

        return this
    }

}