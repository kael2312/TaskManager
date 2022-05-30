import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
    @Input("projectItem") project: ProjectModel = new ProjectModel()
    @Output() editClick = new EventEmitter();
    @Output() deleteClick = new EventEmitter();
    
    constructor(
        public prjService: ProjectService,
        private route: Router
    ) {}

    ngOnInit(): void {
        console.log(this.project);        
    }

    onEditProjectClick(project: ProjectModel){
        this.editClick.emit(project)
    }

    onDeleteProjectClick(projectId: number){
        this.deleteClick.emit(projectId)
    }

    onShowDetailClick(projectID: number){
        this.route.navigateByUrl(`/admin/project/${projectID}`)
    }


}
