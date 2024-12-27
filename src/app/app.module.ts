import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule here
import { AppRoutingModule } from './app-routing.module'; // Make sure to import AppRoutingModule
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
// Remove the imports for standalone components
@NgModule({
  declarations: [
    
    DashboardComponent, 
     // Keep only the components that are part of this module
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule ,
    SidebarComponent,
    FontAwesomeModule,
    HttpClientModule // Add the routing module here
  ],
  providers: [ provideHttpClient(withFetch())],
  bootstrap: []  // Bootstrap AppComponent, not DashboardComponent
})
export class AppModule { }
