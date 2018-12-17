import { Moment } from 'moment';
import { IBlog } from 'app/shared/model//blog.model';
import { ITag } from 'app/shared/model//tag.model';

import { Company } from '../../admin/company-management/company.model';
export interface IEntry {
    id?: number;
    company?: Company;
    title?: string;
    content?: any;
    date?: Moment;
    blog?: IBlog;
    tags?: ITag[];
}

export class Entry implements IEntry {
    constructor(
        public id?: number,
        public title?: string,
        public content?: any,
        public date?: Moment,
        public blog?: IBlog,
        public tags?: ITag[]
    ) {}
}
