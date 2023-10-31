import { animate, style, transition, trigger } from "@angular/animations";
import { Component, Inject,  } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
    selector: 'food-menu',
    templateUrl: './menu-dailog.component.html',
    styleUrls: ['./menu-dailog.component.css'],
    animations: [
      trigger('slideIn', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('2000ms', style({ opacity: 1 })),
        ]),
      ]),
    ],
    // standalone: true
  })
  export class MenuDialogCompnent{
    constructor(private sanitizer: DomSanitizer){
        
    const MenuUrl='https://jaswanthkrish1.github.io/QrMenuInventary/'

        this.safeExternalPageUrl= this.sanitizer.bypassSecurityTrustResourceUrl(MenuUrl)
    }
    safeExternalPageUrl!: SafeResourceUrl;

  }