import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user/user.component';
import { BlankComponent } from './blank/blank.component';
import { BlogComponent } from './blog/blog.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blank', component: BlankComponent},
  {path: 'chekout', component: ChekoutComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
