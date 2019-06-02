import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' ;
import {MaterialModule} from './material/material.module' ;
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http' ;
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ManageRolesService } from './manage-roles.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddRoleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    FormsModule ,
    AppRoutingModule ,
    HttpClientModule,
    MaterialModule ,
  ],
  providers: [ManageRolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
