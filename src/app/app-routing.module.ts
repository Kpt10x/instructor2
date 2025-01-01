import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewByAvailabilityComponent } from './components/view-by-availability/view-by-availability.component';
import { ViewByCourseComponent } from './components/view-by-course/view-by-course.component';
import { ViewByDetailsComponent } from './components/view-by-details/view-by-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () =>
      import('./components/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
  { path: 'view-instructor', loadComponent: () =>
      import('./components/view-instructor/view-instructor.component').then((m) => m.ViewInstructorComponent) },
  { path: 'view-assigned-courses', loadComponent: () =>
      import('./components/view-assigned-courses/view-assigned-courses.component').then((m) => m.ViewAssignedCoursesComponent) },
  { path: 'create-instructor', loadComponent: () =>
      import('./components/create-instructor/create-instructor.component').then((m) => m.CreateInstructorComponent) },
      { path: 'view-by-availability', component: ViewByAvailabilityComponent },
  { path: 'view-by-course', component: ViewByCourseComponent },
  { path: 'view-by-details', component: ViewByDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
