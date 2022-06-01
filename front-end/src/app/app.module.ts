import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ComponentLoaderDirective } from './directives/component-loader.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [
      AuthGuard,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
      },
      {
          provide: HTTP_INTERCEPTORS,
          useClass: ResponseInterceptor,
          multi: true
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
