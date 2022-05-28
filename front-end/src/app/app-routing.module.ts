import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        data: {
            expectedRole: 'Admin'
        },
        loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
    },
    {
        path: 'member',
        canActivate: [AuthGuard],
        data: {
            expectedRole: 'Member'
        },
        loadChildren: () => import("./member/member.module").then(m => m.MemberModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
