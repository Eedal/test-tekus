import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/auth-interceptor';
import { ListSubscriberComponent } from './components/subscriber/list-subscriber/list-subscriber.component';
import { SubscriberDetailComponent } from './components/subscriber/subscriber-detail/subscriber-detail.component';
import { SubscriberModalComponent } from './components/subscriber/subscriber-modal/subscriber-modal.component';
import { SubscriberFormComponent } from './components/subscriber/subscriber-form/subscriber-form.component';
import { SubscriberCreateComponent } from './pages/subscriber/subscriber-create/subscriber-create.component';
import { SubscriberEditComponent } from './pages/subscriber/subscriber-edit/subscriber-edit.component';
import { SubscriberListComponent } from './pages/subscriber/subscriber-list/subscriber-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginFormComponent,
    ListSubscriberComponent,
    SubscriberDetailComponent,
    SubscriberFormComponent,
    SubscriberModalComponent,
    SubscriberCreateComponent,
    SubscriberEditComponent,
    SubscriberListComponent,
    SubscriberCreateComponent,
    SubscriberEditComponent,
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
