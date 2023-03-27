import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SubscriberCreateComponent } from './pages/subscriber/subscriber-create/subscriber-create.component';
import { SubscriberEditComponent } from './pages/subscriber/subscriber-edit/subscriber-edit.component';
import { SubscriberListComponent } from './pages/subscriber/subscriber-list/subscriber-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,
  
  // canActivate: [AuthGuard] 
},

  {
    path: '',
    redirectTo: '/subscribers',
    pathMatch: 'full',
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      { path: 'subscribers', component: SubscriberListComponent },
      { path: 'subscribers/create', component: SubscriberCreateComponent },
      { path: 'subscribers/edit/:id', component: SubscriberEditComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
