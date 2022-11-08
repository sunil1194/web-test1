import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminConsoleComponent } from './admin-console.component';
import { AdminConsoleRoutes } from './admin-console.routing';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './elements/header/header.component';
import { SideNavbarComponent } from './elements/side-navbar/side-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    AdminConsoleRoutes,
    MatSidenavModule
  ],
  declarations: [AdminConsoleComponent, HeaderComponent, SideNavbarComponent]
})
export class AdminConsoleModule { }
