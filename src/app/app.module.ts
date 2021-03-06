import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './services/users.service';
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users-guard';
import { UserCardComponent } from './users-list/user-card.component';
import { UserEditComponent } from './users-list/user-edit.component';
import { UserResolver } from './services/user.resolver';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    UserCardComponent,
    UserEditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService, OnlyLoggedInUsersGuard, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
