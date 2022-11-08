import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'log-in' },
  { path: 'log-in', component: LogInComponent },
];

export const AuthRoutes = RouterModule.forChild(routes);
