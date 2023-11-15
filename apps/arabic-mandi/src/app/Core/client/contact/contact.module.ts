import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MaterialModule, ContactRoutingModule],
  declarations: [ContactComponent],
  exports: [],
})
export class ContactModule {}
