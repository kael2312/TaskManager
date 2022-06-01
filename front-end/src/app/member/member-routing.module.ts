import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskComponent } from './components/task/task.component';
import { UpdateStatusTaskComponent } from './components/update-status-task/update-status-task.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'task',
        pathMatch: 'full'
    },
    {
        path: 'task',
        component: TaskComponent
    },
    {
        path: 'create-task',
        component: CreateTaskComponent
    },
    {
        path: 'edit-task/:taskID',
        component: EditTaskComponent
    },
    {
        path: 'update-status-task/:taskID',
        component: UpdateStatusTaskComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
