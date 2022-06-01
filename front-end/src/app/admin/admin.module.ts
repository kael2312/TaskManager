import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/project/project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { CountriesComponent } from './components/countries/countries.component';
import { ClientLocationsComponent } from './components/client-locations/client-locations.component';
import { TaskPrioritiesComponent } from './components/task-priorities/task-priorities.component';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { MastersComponent } from './components/masters/masters.component';
import { ComponentLoaderDirective } from '../directives/component-loader.directive';

@NgModule({
  declarations: [
      DashboardComponent,
      ProjectComponent,
      ProjectItemComponent,
      FilterPipe,
      ProjectDetailComponent,
      CountriesComponent,
      ClientLocationsComponent,
      TaskPrioritiesComponent,
      TaskStatusComponent,
      MastersComponent,
      ComponentLoaderDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
      NgbActiveModal,
      DatePipe,
      
  ],
  entryComponents: [
      CountriesComponent,
      ClientLocationsComponent,
      TaskPrioritiesComponent,
      TaskStatusComponent
  ]
})
export class AdminModule { }
