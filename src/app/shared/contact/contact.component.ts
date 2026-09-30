import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  private isBrowser = false;
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '91',
    phone: '',
    message: ''
  };


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }


  sendToWhatsApp() {
    if (isPlatformBrowser(this.platformId)) {

      if (!this.formData.firstName || !this.formData.phone) {
        alert('Please fill required fields');
        return;
      }

      const fullPhone = `${this.formData.countryCode}${this.formData.phone}`;

      const message = `*New Travel Inquiry From Your Website*
Name: ${this.formData.firstName} ${this.formData.lastName}
Email: ${this.formData.email}
Phone: +${fullPhone}
Message: ${this.formData.message}
`;

      const encodedMessage = encodeURIComponent(message);


      const url = `https://wa.me/${919963360093}?text=${encodedMessage}`;

      window.open(url, '_blank');
    };
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '91',
      phone: '',
      message: ''
    };
  }


}
