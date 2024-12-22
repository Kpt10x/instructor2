import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule here
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Make sure to import AppRoutingModule
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Remove the imports for standalone components
@NgModule({
  declarations: [
    
    DashboardComponent  // Keep only the components that are part of this module
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule  // Add the routing module here
  ],
  providers: [],
  bootstrap: []  // Bootstrap AppComponent, not DashboardComponent
})
export class AppModule { }
