import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Company } from '../../admin/company-management/company.model';
import { CompanyService } from '../../shared/company/company.service';
import { Principal } from 'app/core';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IBlog } from 'app/shared/model/blog.model';
import { BlogService } from './blog.service';
import { IUser, UserService } from 'app/core';

@Component({
    selector: 'jhi-blog-update',
    templateUrl: './blog-update.component.html'
})
export class BlogUpdateComponent implements OnInit {
    blog: IBlog;
    companies: Company[];
    currentAccount: any;
    isSaving: boolean;

    users: IUser[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private blogService: BlogService,
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        private companyService: CompanyService,
        private principal: Principal
    ) {}

    ngOnInit() {
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.companyService.query().subscribe((res: HttpResponse<Company[]>) => {
            this.companies = res.body;
        });
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ blog }) => {
            this.blog = blog;
        });
        this.userService.query().subscribe(
            (res: HttpResponse<IUser[]>) => {
                this.users = res.body;
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
            this.blog.company = this.currentAccount.company;
        }
        if (this.blog.id !== undefined) {
            this.subscribeToSaveResponse(this.blogService.update(this.blog));
        } else {
            this.subscribeToSaveResponse(this.blogService.create(this.blog));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IBlog>>) {
        result.subscribe((res: HttpResponse<IBlog>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackUserById(index: number, item: IUser) {
        return item.id;
    }
}
