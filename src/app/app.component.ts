import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "./pages/footer/footer.component";
import { HeaderComponent } from "./pages/header/header.component";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "./shared/loader/loader.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Destinationz4u';
  showScrollTop = false;
  isLoading = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.isLoading = false;
        }, 500); // 🔥 IMPORTANT delay
      }
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

      this.isLoading = true; // 👈 ADD THIS

      setTimeout(() => {
        this.isLoading = false;
      }, 800); // 👈 show loader on initial load

      window.scrollTo({ top: 0 });

      window.addEventListener('scroll', () => {
        this.showScrollTop = window.scrollY > 200;
      });

      AOS.init({
        duration: 1000,
        once: true
      });
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  openWhatsApp(): void {
    const phone = '919963360093'; // Replace with your WhatsApp number
    const message = "Hello, I'm contacting through your website. I would like to know more about your services.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }


}
