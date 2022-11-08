import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicInterceptor } from './interceptor/basic-interceptor';


const tokenInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: BasicInterceptor,
  multi: true,
};
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[tokenInterceptor],
  exports: [HttpClientModule],
})
export class CoreModule { }
