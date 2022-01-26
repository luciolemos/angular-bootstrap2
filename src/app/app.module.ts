import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';

import { UserModule } from './user/user.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule,
    SharedModule,

    UserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
