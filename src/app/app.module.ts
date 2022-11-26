import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { ShowClientsComponent } from './clients/show-clients/show-clients.component';
import { CreateMeetingsComponent } from './meetings/create-meetings/create-meetings.component';
import { ShowMeetingsComponent } from './meetings/show-meetings/show-meetings.component';
import { CancelMeetingComponent } from './meetings/cancel-meeting/cancel-meeting.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    ShowClientsComponent,
    CreateMeetingsComponent,
    ShowMeetingsComponent,
    CancelMeetingComponent,
    HomepageComponent,
    NavigationComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
