import { IEntry } from 'app/shared/model//entry.model';

import { Company } from '../../admin/company-management/company.model';
export interface ITag {
    id?: number;
    company?: Company;
    name?: string;
    entries?: IEntry[];
}

export class Tag implements ITag {
    constructor(public id?: number, public name?: string, public entries?: IEntry[]) {}
}
