import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  FormFieldComponent,
];
const modules = [
  FormsModule, ReactiveFormsModule
]
@NgModule({
  imports: [CommonModule, modules],
  declarations: [components],
  exports: [components, modules],
})
export class FormFieldModule {}
