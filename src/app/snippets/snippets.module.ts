import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { BadgesComponent } from './badges/badges.component';
import { CategoriesWidgetComponent } from './categories-widget/categories-widget.component';
import { SideWidgetsComponent } from './side-widgets/side-widgets.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { PostContentComponent } from './post-content/post-content.component';
import { CommentsComponent } from './comments/comments.component';
import { RowContentComponent } from './row-content/row-content.component';
import { PageHeaderComponent } from './page-header/page-header.component';



@NgModule({
  declarations: [
    AccordionComponent,
    BadgesComponent,
    CategoriesWidgetComponent,
    SideWidgetsComponent,
    GetStartedComponent,
    PostContentComponent,
    CommentsComponent,
    RowContentComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
AccordionComponent,
BadgesComponent,
CategoriesWidgetComponent,
SideWidgetsComponent,
GetStartedComponent,
PostContentComponent,
CommentsComponent,
RowContentComponent,
PageHeaderComponent
  ]
})
export class SnippetsModule { }
