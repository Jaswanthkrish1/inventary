import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core.module';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication.routing';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CommonModule, CoreModule, AuthenticationRoutingModule],
  exports: [AuthenticationRoutingModule],
})
export class AuthenticationModule {}
