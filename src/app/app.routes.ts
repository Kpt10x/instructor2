import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateInstructorComponent } from './components/create-instructor/create-instructor.component';
import { ViewAssignedCoursesComponent } from './components/view-assigned-courses/view-assigned-courses.component';
import { ViewInstructorComponent } from './components/view-instructor/view-instructor.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view-assigned-courses', component: ViewAssignedCoursesComponent },
  { path: 'create-instructor', component: CreateInstructorComponent },
  {path:'view-instructor',component:ViewInstructorComponent}
  
];
