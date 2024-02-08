import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class XlsxFileService {
  private apiUrl = 'http://localhost:9001'; // Replace with your server's API endpoint

  constructor(private http: HttpClient) { }
  saveToFile(data: any[]): void {
    const url = `${this.apiUrl}/saveToFile`;
    this.http.post(url, data).subscribe(
      (r) => {
        alert("FoodItems Added Into Application")
      },
      error => console.error('Error saving data:', error)
    );
  }

  saveOfferToFile(data: any[]): void {
    const url = `${this.apiUrl}/saveOfferToFile`;
    this.http.post(url, data).subscribe(
      (r) => {
        alert("Offers Added Into Application")
      },
      (error) => console.error('Error saving data:', error)
    );
  }
}
