import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {

    projectDetail: ProjectModel = new ProjectModel()

    constructor(
        private activatedRoute: ActivatedRoute,
        private prjService : ProjectService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
            this.prjService.getProjectById(params['projectID'])
                .subscribe((result: ProjectModel) => {
                    this.projectDetail = result
                })
        })
    }
}
