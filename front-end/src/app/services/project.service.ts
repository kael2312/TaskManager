import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProjectModel } from '../models/project.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectService {
    private apiUrl = environment.apiUrl;
    url = this.apiUrl + `/api/projects`;
    
    constructor(private httpClient: HttpClient) {}

    getProject(): Observable<ProjectModel[]> {
        
        return this.httpClient
            .get<ProjectModel[]>(this.url)
            .pipe(
                map((result) =>
                    result.map((project) => new ProjectModel(project))
                )
            );
    }

    searchProject(searchBy: string, searchText: string): Observable<ProjectModel[]> {
        const searchUrl = this.url + `/search/${searchBy}/${searchText}`        
        return this.httpClient
            .get<ProjectModel[]>(searchUrl)
            .pipe(
                map((result) =>
                    result.map((project) => new ProjectModel(project))
                )
            )
    }

    addProject(data: ProjectModel): Observable<ProjectModel> {
        return this.httpClient
            .post<ProjectModel>(this.url, data)
    }

    updateProject(data: ProjectModel): Observable<ProjectModel> {
        return this.httpClient
            .put<ProjectModel>(this.url, data)
    }

    deleteProject(projectID: number): Observable<number>{
        return this.httpClient
            .delete<number>(this.url + `?ProjectID=${projectID}`)
    }
}
