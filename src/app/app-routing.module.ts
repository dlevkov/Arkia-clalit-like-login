import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users-guard';
import { UserEditComponent } from './users-list/user-edit.component';
import { UserResolver } from './services/user.resolver';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersListComponent, pathMatch: 'full', canActivate: [OnlyLoggedInUsersGuard] },
  { path: 'user', component: UserEditComponent, pathMatch: 'full', canActivate: [OnlyLoggedInUsersGuard] },
  { path: 'user/:id', component: UserEditComponent, canActivate: [OnlyLoggedInUsersGuard], resolve: { User: UserResolver } },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
