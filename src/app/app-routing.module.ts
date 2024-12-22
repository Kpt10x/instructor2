import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Standalone Components
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view-assigned-courses', loadComponent: () => import('./components/view-assigned-courses/view-assigned-courses.component').then(m => m.ViewAssignedCoursesComponent) },
  { path: 'create-instructor', loadComponent: () => import('./components/create-instructor/create-instructor.component').then(m => m.CreateInstructorComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
