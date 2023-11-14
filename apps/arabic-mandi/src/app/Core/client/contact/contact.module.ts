import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { CoreModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-matirial.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [CoreModule, CommonModule, ReactiveFormsModule, MaterialModule, ContactRoutingModule],
  declarations: [ContactComponent],
  exports: [],
})
export class ContactModule {}
