import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormsModule } from '@angular/forms';
import { ShowUsersComponent } from './show-users/show-users.component';
import { CardUserComponent } from './show-users/card-user/card-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    ShowUsersComponent,
    CardUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
