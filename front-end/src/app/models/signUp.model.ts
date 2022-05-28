export type Gender = 'male' | 'female'

export interface IPersonName{
    firstName: string,
    lastName: string
}

export interface ISkill{
    skillName: string,
    skillLevel: string,
    applicationUser: Object
}

export class SkillModel implements ISkill{
    skillName: string = ''
    skillLevel: string = ''
    applicationUser: Object = {}

    /**
     *
     */
    constructor(data: ISkill) {
        this.fromJSON(data)        
    }
    fromJSON(data: ISkill | any): SkillModel {
        if(!data) return this
        this.skillName = data.skillName || this.skillName;
        this.skillLevel = data.skillLevel || this.skillLevel;
        this.applicationUser = this.applicationUser;

        return this
    }

}

export interface ISignUpModel{
    personName: IPersonName,
    email: string,
    mobile: string,
    dateOfBirth: Date,
    password: string,
    gender: Gender,
    countryID: number,
    receiveNewsLetters: boolean,
    skills: ISkill[]
}

export class SignUpModel implements ISignUpModel{
    personName: IPersonName = {
        firstName: '',
        lastName: ''
    }
    email: string = ''
    mobile: string = ''
    dateOfBirth: Date = new Date(Date.now())
    password: string = ''
    gender: Gender = 'male'
    countryID: number = 0
    receiveNewsLetters: boolean = false
    private _skills: ISkill[] = []

    constructor(data: ISignUpModel | any){
        this.fromJSON(data)
    }

    fromJSON(data: any): SignUpModel {
        if(!data) return this
        this.personName = data.personName || this.personName;
        this.email = data.email || this.email;
        this.mobile = data.mobile || this.mobile;
        this.dateOfBirth = data.dateOfBirth || this.dateOfBirth;
        this.password = data.password || this.password;
        this.countryID = data.country || this.countryID;
        this.receiveNewsLetters = data.receiveLetters || this.receiveNewsLetters;
        this._skills = data.skills || this._skills

        return this
    }

    get skills(): SkillModel[]{
        const _skills: SkillModel[] = [];
        this._skills.forEach(item => _skills.push(new SkillModel(item)))
        return _skills
    }

    toJSON(): ISignUpModel{
        return {
            personName: this.personName,
            email: this.email,
            dateOfBirth: this.dateOfBirth,
            password: this.password,
            gender: this.gender,
            countryID: this.countryID,
            receiveNewsLetters: this.receiveNewsLetters,
            skills: this.skills,
            mobile: this.mobile
        }
    }
}

