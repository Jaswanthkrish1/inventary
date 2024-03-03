import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from './Core/authentication/authentication.module';

import { APOLLO_OPTIONS }  from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/cache';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './Core/material.module';
import { LayoutFlexModule } from './Core/layout/layout.module';
const uri = 'http://localhost:3000/api/graphql'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    LayoutFlexModule,
    AuthenticationModule,
  ],

  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: uri,
          }),
        };
      },
      deps: [HttpLink],
    },
    
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
