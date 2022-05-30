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

@NgModule({
  declarations: [
      DashboardComponent,
      ProjectComponent,
      ProjectItemComponent,
      FilterPipe,
      ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
      NgbActiveModal,
      DatePipe
  ]
})
export class AdminModule { }
