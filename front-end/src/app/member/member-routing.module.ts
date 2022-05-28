import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'task',
        pathMatch: 'full'
    },
    {
        path: 'task',
        component: TaskComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
