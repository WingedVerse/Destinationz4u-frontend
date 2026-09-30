import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  newsletterEmail = '';

  subscribeWhatsApp() {

    if (!this.newsletterEmail) {
      alert('Please enter email');
      return;
    }

    const message = `📩 *Newsletter Subscription Request*

Email: ${this.newsletterEmail}
`;

    const url = `https://wa.me/919966985834?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }
}
