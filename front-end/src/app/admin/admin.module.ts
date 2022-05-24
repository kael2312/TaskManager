import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
      DashboardComponent,
      ProjectComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,    
  ]
})
export class AdminModule { }
