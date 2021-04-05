import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { STUDENT_ROUTES } from './App.Routing';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { StudentService } from './student.service';
import { AuthorizationGuards } from './guards/auth-guards';
import { UnauthorizationGuard } from './guards/unAuth-guard';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentAppComponent } from './student/student-app/student-app.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentHomeComponent
  ],
  imports: [
    BrowserModule,
    STUDENT_ROUTES,
    StudentModule
    
    
  ],
  providers: [StudentService, AuthorizationGuards, UnauthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
