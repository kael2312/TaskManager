import { Component, OnInit } from '@angular/core';
import { IProject, ProjectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {

    listProjects: ProjectModel[] = []
    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.getListProject();
    }

    getListProject(){
        this.projectService.getProject()
            .subscribe((result: ProjectModel[]) => {
                this.listProjects = result
            })
    }
}
