import { IUser } from 'app/core/user/user.model';

import { Company } from '../../admin/company-management/company.model';
export interface IBlog {
    id?: number;
    company?: Company;
    name?: string;
    handle?: string;
    user?: IUser;
}

export class Blog implements IBlog {
    constructor(public id?: number, public name?: string, public handle?: string, public user?: IUser) {}
}
