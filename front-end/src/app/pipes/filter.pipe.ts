import { Pipe, PipeTransform } from '@angular/core';
import { ProjectModel } from '../models/project.model';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], searchBy: string, searchText: string): any[] {
        return value.filter(a => a[searchBy].includes(searchText));
    }
}
