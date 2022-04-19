import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GitUserService } from './services/git-user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitUserComponent } from './components/git-user/git-user.component';


@NgModule({
  declarations: [
    AppComponent,
    GitUserComponent    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,
    FormsModule
  ],
  providers: [GitUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
