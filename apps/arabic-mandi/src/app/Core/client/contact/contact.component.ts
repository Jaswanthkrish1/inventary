import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactDailog } from './components/contact-dailog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'food-category',
  templateUrl: './contact.component.html',
  styles: [
    `
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }

      .header {
        text-align: center;
        margin-bottom: 20px;
      }

      .header h1 {
        font-size: 24px;
        font-weight: bold;
        margin: 0;
      }

      .header h3 {
        font-size: 16px;
        color: #555;
        margin: 0;
      }

      .body {
        background-color: #f5f5f5;
        padding: 20px;
        border-radius: 5px;
      }

      mat-form-field.full-width {
        width: 100%;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin-bottom: 10px;
      }

      .mat-divider.full-width {
        width: 100%;
      }

      button.btn-submit {
        width: 100%;
      }

      small {
        display: block;
        text-align: center;
        margin-top: 10px;
        font-size: 14px;
        color: #777;
      }

      .req {
        color: red;
      }

      .left {
        margin-right: 10px;
      }

      .pull-right {
        margin-left: 10px;
      }
    `,
  ],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _snackbar: MatSnackBar,
    private _dialog: MatDialog,
    private _router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      // Define your form controls here
      first_name: ['', Validators.required],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]],
      comments: [''],
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.contactForm.reset();
      this.openDailog('We Will Contact You Soon ThankYou..........',true);
      this._router.navigate(['/'])
    } else {
      // alert('Plese Fill All Details...');
      this.openDailog('Plese Fill All Details..........',false);
    }
  }
  openDailog(text: any, status: boolean) {
    if(status){
      this._snackbar.open(text,'close',{
        duration: 3000,
        verticalPosition:'top'
      })
    }else{
      this._snackbar.open(text,'!',{
        duration: 3000,
        verticalPosition:'top'
      })
    }

  }
}
