import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core.module';
import { MaterialModule } from '../../material.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateOfferService } from './create-offer.service';
import { OfferRoutingModule } from './create-offer.route.module';
import { CreateOfferComponent } from './pages/create-offer.component';
import { OfferItemComponentDialog } from './components/combo-offer-dailog.component';
import { OfferViewComponent } from './views/offer-view.component';
import { UpdateOfferDailogComponent } from './components/update-offer.component';
import { OfferDetailsDailogComponent } from './components/offer-details-dailog.component';

@NgModule({
  declarations: [
    CreateOfferComponent,
    OfferItemComponentDialog,
    UpdateOfferDailogComponent,
    OfferDetailsDailogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    MatSnackBarModule,
    OfferRoutingModule,
    OfferViewComponent,

  ],
  exports: [],
  providers: [CreateOfferService],


})
export class CreateOfferModule {}
