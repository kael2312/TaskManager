export interface LoggedInUserModel {
    token: string;
    role: string;
    firstName?: any;
    lastName?: any;
    dateOfBirth: Date;
    gender?: any;
    countryID: number;
    receiveNewsLetters: boolean;
    id: string;
    userName: string;
    normalizedUserName: string;
    email: string;
    normalizedEmail: string;
    emailConfirmed: boolean;
    passwordHash?: any;
    securityStamp: string;
    concurrencyStamp: string;
    phoneNumber?: any;
    phoneNumberConfirmed: boolean;
    twoFactorEnabled: boolean;
    lockoutEnd?: any;
    lockoutEnabled: boolean;
    accessFailedCount: number;
}
