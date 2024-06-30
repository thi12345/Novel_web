import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './account/register/register.component';
import { ForgotPassComponent } from './account/forgot-pass/forgot-pass.component';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './account/signin/signin.component';
import { HeaderAccountComponent } from './account/header-account/header-account.component';
import { DesComponent } from './des/des.component';
import { ReadComponent } from './description/read/read.component';
import { DescriptComponent } from './description/descript/descript.component';
import { RatingComponent } from './description/rating/rating.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SummaryComponent } from './description/summary/summary.component';
import { ListStoryComponent } from './list-story/list-story.component';
import { Route, RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoryService } from 'src/service-story/story.service';
import { MatTreeModule } from '@angular/material/tree';
import { FilterComponent } from './list-story/filter/filter.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    ForgotPassComponent,
    SigninComponent,
    HeaderAccountComponent,
    DesComponent,
    ReadComponent,
    DescriptComponent,
    SummaryComponent,
    ListStoryComponent,
    FilterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatMenuModule,

    MatPaginatorModule,
    NgxPaginationModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
