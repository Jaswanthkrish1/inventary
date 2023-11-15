import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'food-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit{
    public isLoading = false;
    public form!: FormGroup;
    public isHorizontal = false;

    constructor (  private readonly _fb: FormBuilder ) {
      this._fb.group({

      })
    }
  ngOnInit(): void {
    this.form = this._fb.group({
      category: [null, Validators.required],
      name: [null, Validators.required],
      img: [ null ],
      price: [null, Validators.required],
      gst: [null],

    })
    this.updateStepperMode();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateStepperMode();
  }

  private updateStepperMode(): void {
    // Change the condition based on your desired screen width
    this.isHorizontal = window.innerWidth > 768;
  }
  onSubmitHandler(){
   if(this.firstFormGroup.valid && this.secondFormGroup.valid){
    const combinedData = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value
    };
   }
  }
  firstFormGroup = this._fb.group({
    name: [null, Validators.required],
    category: [null, Validators.required],
  });
  secondFormGroup = this._fb.group({
    price: [null, Validators.required],
    img: [ null ],
    gst: [null],
  });
  step = 0;
  public category = [
    "Staters", 'Biriyani', 'MockTails'
  ]
  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
    const maxSizeMB = 2;
    if (selectedFile) {
      // Check file size
      const fileSizeMB = selectedFile.size / (1024 * 1024);
      if (fileSizeMB > maxSizeMB) {
        this.secondFormGroup.get('img')?.setValue(null);
        // Reset the control and show an error message
        alert(`File size exceeds the limit of ${maxSizeMB} MB`);
      } else {
        // Update the control value
        this.secondFormGroup.get('img')?.setValue(selectedFile);
      }
    }
  }


  


}
