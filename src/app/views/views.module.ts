import { SnippetsModule } from './../snippets/snippets.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlankComponent } from './blank/blank.component';
import { ChekoutComponent } from './chekout/chekout.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    BlogComponent,
    BlankComponent,
    ChekoutComponent,

  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SnippetsModule

  ]
})
export class ViewsModule { }
