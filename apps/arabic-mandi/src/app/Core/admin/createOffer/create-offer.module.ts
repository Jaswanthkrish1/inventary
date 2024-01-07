import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core.module';
import { MaterialModule } from '../../material.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateOfferService } from './create-offer.service';
import { OfferRoutingModule } from './create-offer.route.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    MatSnackBarModule,
    OfferRoutingModule
  ],
  exports: [MatSnackBarModule],
  providers: [CreateOfferService],


})
export class CreateOfferModule {}
