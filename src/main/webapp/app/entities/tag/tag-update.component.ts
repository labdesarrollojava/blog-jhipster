import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Company } from '../../admin/company-management/company.model';
import { CompanyService } from '../../shared/company/company.service';
import { Principal } from 'app/core';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { ITag } from 'app/shared/model/tag.model';
import { TagService } from './tag.service';
import { IEntry } from 'app/shared/model/entry.model';
import { EntryService } from 'app/entities/entry';

@Component({
    selector: 'jhi-tag-update',
    templateUrl: './tag-update.component.html'
})
export class TagUpdateComponent implements OnInit {
    tag: ITag;
    companies: Company[];
    currentAccount: any;
    isSaving: boolean;

    entries: IEntry[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private tagService: TagService,
        private entryService: EntryService,
        private activatedRoute: ActivatedRoute,
        private companyService: CompanyService
    ) {}

    ngOnInit() {
        this.companyService.query().subscribe((res: HttpResponse<Company[]>) => {
            this.companies = res.body;
        });
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ tag }) => {
            this.tag = tag;
        });
        this.entryService.query().subscribe(
            (res: HttpResponse<IEntry[]>) => {
                this.entries = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.currentAccount.company) {
            this.tag.company = this.currentAccount.company;
        }
        if (this.tag.id !== undefined) {
            this.subscribeToSaveResponse(this.tagService.update(this.tag));
        } else {
            this.subscribeToSaveResponse(this.tagService.create(this.tag));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ITag>>) {
        result.subscribe((res: HttpResponse<ITag>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackEntryById(index: number, item: IEntry) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}
