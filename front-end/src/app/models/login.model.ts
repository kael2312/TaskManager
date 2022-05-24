export interface ILoginModel{
    UserName: string;
    Password: string;
}

export class LoginModel implements ILoginModel{
    UserName: string = ''
    Password: string = ''

    constructor(data: ILoginModel){
        this.fromJSON(data)
    }

    fromJSON(data: ILoginModel) {
        if(!data) return this
        this.UserName = data.UserName || '';
        this.Password = data.Password || '';
        return this 
    }
    
}