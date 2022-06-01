import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { TaskComponent } from './components/task/task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { UpdateStatusTaskComponent } from './components/update-status-task/update-status-task.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskComponent,
    CreateTaskComponent,
    EditTaskComponent,
    UpdateStatusTaskComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    ReactiveFormsModule
  ]
})
export class MemberModule { }
