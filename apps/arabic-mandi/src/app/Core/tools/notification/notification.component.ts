import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  template: `<div class="notification">{{ message }}</div>`,
  styles: [`
    .notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #333;
      color: #fff;
      padding: 10px;
      border-radius: 5px;
    }
  `]
})
export class NotificationComponent {
  [x: string]: any;
  @Input() message!: string;
}
