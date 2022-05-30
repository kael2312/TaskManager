import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
    NgbModal,
    ModalDismissReasons,
    NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { markFormGroupTouched } from 'src/app/helpers/form';
import { ClientLocationModel } from 'src/app/models/clientLocation.model';
import { IProject, ProjectModel } from 'src/app/models/project.model';
import { ClientLocationService } from 'src/app/services/client-location.service';
import { ProjectService } from 'src/app/services/project.service';
import { CustomValidatorsService } from 'src/app/validators/custom-validators.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
    constructor(
        private projectService: ProjectService,
        private fb: FormBuilder,
        private modalService: NgbModal,
        private clientLocationService: ClientLocationService,
        private customValidator: CustomValidatorsService
    ) {}

    listProjects: ProjectModel[] = [];
    searchForm: FormGroup = new FormGroup({});
    projectForm: FormGroup = new FormGroup({});
    closeResult = '';
    listClientLocationService: ClientLocationModel[] = [];
    listClientLocationService$: Observable<ClientLocationModel[]> = new Observable();
    isUpdateProject: boolean = false;
    objectKeys = Object.keys;

    ngOnInit(): void {
        this.getListProject();
        this.initSearchForm();
        this.initProjectForm();
        this.getListClientLocationService();
    }

    getListProject() {
        this.projectService.getProject().subscribe((result: ProjectModel[]) => {
            this.listProjects = result;
        });
    }

    getListClientLocationService() {
        this.listClientLocationService$ = this.clientLocationService.getAll();
    }
    

    initSearchForm() {
        this.searchForm = this.fb.group({
            searchBy: new FormControl('', {
                validators: [
                    Validators.required
                ]
            }),
            searchText: new FormControl(null, {
                validators: [
                    Validators.required
                ]
            }),
        });
    }

    initProjectForm(data?: ProjectModel) {
        this.projectForm = this.fb.group({
            projectID: new FormControl(data?.projectID, {
                validators: [
                    Validators.required
                ],
                asyncValidators: [
                    this.customValidator.checkExistProject()
                ],
                updateOn: 'blur'
            }),
            projectName: new FormControl(data?.projectName, {validators: [
                Validators.required,
            ]}),
            dateOfStart: new FormControl(formatDate(new Date(data ? data?.dateOfStart : Date.now()), 'yyyy-MM-dd', 'en')),
            teamSize: new FormControl(data?.teamSize, {validators: [
                Validators.required
            ]}),
            active: new FormControl(data ? data?.active : false),
            status: new FormControl(data ? data?.status : 'In Force'),
            clientLocationID: new FormControl(data?.clientLocationID, {validators: [
                Validators.required
            ]}),
            clientLocation: new FormControl(new ClientLocationModel(), {validators: [
                Validators.required
            ]}),
        });
    }

    onSearch() {
        if (!this.searchForm.valid) {
            markFormGroupTouched(this.searchForm);
        }else{
            const searchBy = this.searchForm.controls['searchBy'].value;
            const searchText = this.searchForm.controls['searchText'].value;
            this.projectService
                .searchProject(searchBy, searchText)
                .subscribe((result: ProjectModel[]) => {
                    this.listProjects = result;
                });
        }
        
    }

    onOpenModalProjectForm(content: any, dataEditProject?: ProjectModel) {
        if (dataEditProject) {
            this.isUpdateProject = true
            this.initProjectForm(dataEditProject);
        }else{
            this.initProjectForm(dataEditProject);
            this.isUpdateProject = false
        }
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
        });
        
        
    }

    onSaveProject() {
        if (!this.projectForm.valid) {
            markFormGroupTouched(this.projectForm)
        }else{
            if (this.isUpdateProject) {
                this.projectService
                .updateProject(this.projectForm.getRawValue())
                .subscribe((result) => {
                    this.getListProject();  
                });
            }else{
                this.projectService
                .addProject(this.projectForm.getRawValue())
                .subscribe((result) => {
                    this.getListProject();    
                });
            }
            this.modalService.dismissAll();
            this.projectForm.reset()
        }     

        
        
    }

    onDeleteProject(projectID: number){
        this.projectService
            .deleteProject(projectID)
            .subscribe((result: number) => {
                if (result === projectID) {
                    this.getListProject();
                }
            })
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    onToggleDetail(){
        this.projectService.toggleDetail();
    }
}
