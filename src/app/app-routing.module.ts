import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { ShowClientsComponent } from './clients/show-clients/show-clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CancelMeetingComponent } from './meetings/cancel-meeting/cancel-meeting.component';
import { CreateMeetingsComponent } from './meetings/create-meetings/create-meetings.component';
import { ShowMeetingsComponent } from './meetings/show-meetings/show-meetings.component';

const routes: Routes = [
  {path:"home", component:HomepageComponent},
  {path:"createclient", component:CreateClientComponent },
  {path:"showclients", component:ShowClientsComponent },
  {path:"createmeeting", component:CreateMeetingsComponent },
  {path:"cancelmeeting", component:CancelMeetingComponent },
  {path:"showmeetings", component:ShowMeetingsComponent },
  {path:"dashboard", component: DashboardComponent},
  {path:"login", component: LoginComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
