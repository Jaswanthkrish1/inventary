import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './Core/layout/layout.module';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from './Core/authentication/authentication.module';
import { MainLayout } from './Core/layout/flex-layout.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    LayoutModule,
    RouterModule,
    AuthenticationModule,
    
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
