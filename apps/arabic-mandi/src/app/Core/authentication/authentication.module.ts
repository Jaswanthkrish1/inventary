import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core.module';
import { AuthenticationComponent } from './authentication.component';



@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,CoreModule
  ]
})
export class  AuthenticationModule { }
