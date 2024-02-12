// app.component.ts
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { XlsxFileService } from './xlsx.service';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'food-xlsx',
  templateUrl: './xlsx.component.html'
})
export class XlsxComponent {
  constructor(private XlsxFileService: XlsxFileService, private fb: FormBuilder) { }
  public jsonData!: any[];
  public offerJsonData!: any[];
  public editedData: FormGroup = this.fb.group({});
  public showSection = true;
  public desiredItemFields = ['Size', 'Name', 'Price', 'Category', 'Status', 'Type', 'Discount', 'FoodType', 'Image'];
  public desiredOfferFields = ['OfferName', 'OfferPrice', 'OfferStatus', 'OfferDiscount', 'OfferItems', 'OfferImage'];


  onFileChange(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.processExcelData(file);
    }
  }

  clearOfferJson() {
    this.offerJsonData = [];
    const fileInput = document.getElementById('input2') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Reset the file input
    }
  }
  clearItemJson() {
    this.jsonData = [];
    const fileInput = document.getElementById('input1') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Reset the file input
    }
  }
  uploadData(): void {
    this.XlsxFileService.saveToFile(this.jsonData)
    this.clearItemJson();
  }
  toggleSection(): void {
    this.showSection = !this.showSection;
  }
  private processExcelData(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      // Assuming the data is in the first sheet
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert to JSON with explicitly specified type
      const jsonData: Array<any[]> = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      // Map array data to objects with named properties following the FoodType interface
      const formattedData = jsonData.slice(1).map(row => {
        const dataObject: { [key: string]: any } = {
          Id: uuidv4()
        };

        for (let i = 1; i < row.length; i++) {
          const fieldName = jsonData[0][i];
          let fieldValue = row[i];

          // Check if the current field is one of the desired fields
          if (this.desiredItemFields.includes(fieldName)) {
            dataObject[fieldName] = fieldValue;
          }
        }

        return dataObject;
      });


      // Log formatted data to the console
      this.jsonData = formattedData;
    };
    reader.readAsArrayBuffer(file);
  }

  //offer start

  onOfferFileChange(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.processOfferExcelData(file);
    }
  }

  uploadOfferData(): void {
    this.XlsxFileService.saveOfferToFile(this.offerJsonData);
    this.clearOfferJson();
  }


  private processOfferExcelData(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      // Assuming the data is in the first sheet
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert to JSON with explicitly specified type
      const jsonData: Array<any[]> = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Check if there is more than one row in the data
      if (jsonData.length > 1) {
        // Map array data to objects with named properties following the FoodType interface
        const formattedOfferData = jsonData.slice(1).map(row => {
          const dataObject: { [key: string]: any } = {
            Id: uuidv4()
          };

          for (let i = 1; i < row.length; i++) {
            const fieldName = jsonData[0][i];
            const fieldValue = row[i];

            // Check if the current field is one of the desired fields
            if (this.desiredOfferFields.includes(fieldName)) {
              // For OfferItems, split the string into an array
              if (fieldName === 'OfferItems') {
                const offerItemsArray = fieldValue.split(';').map((item: string) => item.trim());
                dataObject[fieldName] = offerItemsArray;
              } else {
                dataObject[fieldName] = fieldValue;
              }
            }
          }
          return dataObject;
        });

        // console.log(formattedOfferData);
        // Log formatted data to the console
        this.offerJsonData = formattedOfferData;
      } else {
        console.error('No data or only header row found in the Excel file.');
      }
    };
    reader.readAsArrayBuffer(file);
  }

}




