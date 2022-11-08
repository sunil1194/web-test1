import { Routes, RouterModule } from '@angular/router';
import { AdminConsoleComponent } from './admin-console.component';

const children:Routes = [
  {path:'', pathMatch:"full", redirectTo:'dashboard'},
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
]

const routes: Routes = [
  {path:'', component:AdminConsoleComponent, children:children },
];

export const AdminConsoleRoutes = RouterModule.forChild(routes);
