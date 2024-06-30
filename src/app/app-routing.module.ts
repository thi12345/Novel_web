import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './account/signin/signin.component';
import { RegisterComponent } from './account/register/register.component';
import { HeaderAccountComponent } from './account/header-account/header-account.component';
import { HomeComponent } from './home/home.component';
import { ForgotPassComponent } from './account/forgot-pass/forgot-pass.component';
import { DesComponent } from './des/des.component';
import { DescriptComponent } from './description/descript/descript.component';
import { ListStoryComponent } from './list-story/list-story.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'descript/:id',
    component: DescriptComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'header-account',
    component: HeaderAccountComponent
  },
  {
    path: 'forgot-pass',
    component: ForgotPassComponent
  },
  {
    path: 'list-story',
    component: ListStoryComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
