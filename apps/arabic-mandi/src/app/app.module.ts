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
import { FlexRoutingModule } from './Core/layout/flex-routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FlexRoutingModule,
    AuthenticationModule,
  ],
  providers: [
    {
      provide:  APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create(
            {
              uri: 'api/graphql'
            }
          )
        }
      },
      deps: [HttpLink],
    }
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
