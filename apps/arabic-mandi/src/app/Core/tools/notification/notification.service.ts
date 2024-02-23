import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NotificationComponent } from './notification.component'; // Create a NotificationComponent to display the notification

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay) { 
    this.overlayRef = this.overlay.create();
  }

  showNotification(message: string): void {
    const notificationPortal = new ComponentPortal(NotificationComponent);
    const componentRef = this.overlayRef.attach(notificationPortal);
    const componentInstance = componentRef.instance as NotificationComponent;
    componentInstance['message'] = message;
  }

  hideNotification(): void {
    this.overlayRef.detach();
  }
}
