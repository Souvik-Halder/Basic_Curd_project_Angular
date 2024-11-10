import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserCreateComponent } from './components/user-create/user-create.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },

  { path: 'users/edit/:id', component: UserEditComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
