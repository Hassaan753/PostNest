import {Routes} from '@angular/router';
import {LogInComponent} from './auth-layout/log-in/log-in.component';
import {SignUpComponent} from './auth-layout/sign-up/sign-up.component';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {SessionGuard} from './guards/session.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [SessionGuard],
    children: [
      {
        path: 'login',
        component: LogInComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
];
