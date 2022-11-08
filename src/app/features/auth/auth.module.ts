import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import { LogInComponent } from './log-in/log-in.component';
import { FormFieldModule } from 'src/app/shared/form-field/form-field.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
    FormFieldModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    LogInComponent
  ]
})
export class AuthModule { }
