import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core.module';
import { MaterialModule } from '../../material.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateOfferService } from './create-offer.service';
import { OfferRoutingModule } from './create-offer.route.module';
import { CreateOfferComponent } from './pages/create-offer.component';
import { OfferItemComponentDialog } from './components/combo-offer-dailog.component';
import { OfferViewComponent } from './pages/offer-view.component';

@NgModule({
  declarations: [
    CreateOfferComponent,
    OfferItemComponentDialog,
    OfferViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    MatSnackBarModule,
    OfferRoutingModule
  ],
  exports: [],
  providers: [CreateOfferService],


})
export class CreateOfferModule {}
