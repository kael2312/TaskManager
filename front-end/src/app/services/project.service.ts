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
}
