import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, NgZone, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { ContactComponent } from '../../shared/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnInit {

  @ViewChild('heroCarousel') heroCarousel!: ElementRef<HTMLElement>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('myVideo') video!: ElementRef<HTMLVideoElement>;


  private isBrowser = false;
  activeIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private meta: Meta, private title: Title, private zone: NgZone) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async ngAfterViewInit(): Promise<void> {
    if (!this.isBrowser) return;

    // ✅ Bootstrap carousel
    if (this.heroCarousel?.nativeElement) {
      const bootstrap = await import('bootstrap');
      new bootstrap.Carousel(this.heroCarousel.nativeElement, {
        interval: 6000,
        pause: false
      });
    }


    const container = this.scrollContainer.nativeElement;
    container.addEventListener('scroll', () => {
      this.zone.run(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;
        const scrollPercent = container.scrollLeft / maxScroll;
        // ✅ ADD IT HERE (THIS IS THE CORRECT PLACE)
        this.activeIndex = Math.min(2, Math.max(0, Math.round(scrollPercent * 2)));
      });
    });



  }



  ngOnInit() {
    this.title.setTitle('Destinationz4u | Best Travel Agency in India');

    this.meta.addTags([
      { name: 'description', content: 'Explore India, Bali, Dubai, Thailand, Srilanka, Maldives, Malysia, Singapore, Andaman nicabar & more with customized travel packages at best prices.' },
      { name: 'keywords', content: 'travel agency, tour packages, India tours, Bali trips, Dubai travel, international trips, Thailands tour packages, Indonesia tour packages, Srilanka tour packages, Maldives tour packages, Mauritius tour packages, Dubai n abudhabi tour packages, Malaysia tour packages, Singapore tour packages, Andaman Nicobar tour packages, Lakshwadeep tour packages, Ladakh tour packages, Seychelles tour packages, Baku tour packages, Azerbaijan tour packages, Kazakhstan tour packages,' },
      { name: 'author', content: 'Destinationz4u' }
    ]);
  }



  scrollToStep(index: number) {
    const container = this.scrollContainer.nativeElement;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const targetScroll = (index / 2) * maxScroll; // 🔥 3 dots logic
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }

  
  isPlaying = false;

  playVideo() {
    const vid = this.video.nativeElement;
    vid.play();
    this.isPlaying = true;
  }

  // Pause when user scrolls
  @HostListener('window:scroll')
  onScroll() {
    const vid = this.video?.nativeElement;
    if (vid && !vid.paused) {
      vid.pause();
      this.isPlaying = false;
    }
  }



  favPlaces = [
    { img: 'assets/destinations/andaman-nicobar/Port-Blair.jpeg', name: 'Port Blair', desc: 'Capital city and entry point', location: 'Andaman & Nicobar Islands' },
    { img: 'assets/destinations/andaman-nicobar/Baratang-Island.jpeg', name: 'Baratang Island', desc: 'Unique natural wonders', location: 'Andaman & Nicobar Islands' },
    { img: 'assets/destinations/andaman-nicobar/Cellular-Jail.jpeg', name: 'Cellular Jail (Kala Pani)', desc: 'Built by the British to imprison Indian freedom fighters', location: 'Andaman & Nicobar Islands' },
    { img: 'assets/destinations/Lakshadweep/Bangaram-Island.jpeg', name: 'Bangaram Island', desc: 'Uninhabited island famous for crystal-clear waters and luxury experiences.', location: 'Lakshadweep' },
    { img: 'assets/destinations/Lakshadweep/Kadmat-Island.jpeg', name: 'Kadmat Island', desc: 'Popular for scuba diving and long sandy beaches.', location: 'Lakshadweep' },
    { img: 'assets/destinations/Ladakh/leh.avif', name: 'Leh', desc: 'Main town and gateway to Ladakh with markets, cafes, and monasteries.', location: 'Ladakh' },
    { img: 'assets/destinations/Ladakh/Khardung-La-Pass.jpeg', name: 'Khardung La Pass', desc: 'One of the highest motorable roads in the world.', location: 'Ladakh' },
    { img: 'assets/destinations/Ladakh/Tso-Moriri-Lake.jpeg', name: 'Tso Moriri Lake', desc: 'Peaceful and less crowded lake surrounded by mountains.', location: 'Ladakh' },
    { img: 'assets/destinations/Ladakh/Hemis-Monastery.jpeg', name: 'Hemis Monastery', desc: 'Largest monastery in Ladakh known for its annual festival.', location: 'Ladakh' },
    { img: 'assets/destinations/Ladakh/Diskit-Monastery.jpeg', name: 'Diskit Monastery', desc: 'Famous for its giant Buddha statue overlooking Nubra Valley.', location: 'Ladakh' },
    { img: 'assets/destinations/Ladakh/Sangam-Point.jpeg', name: 'Sangam Point', desc: 'Confluence of the Indus and Zanskar rivers.', location: 'Ladakh' },
    { img: 'assets/destinations/Goa/Calangute-Beach.jpeg', name: 'Calangute Beach', desc: 'The largest and most popular beach with bustling tourist activity.', location: 'Goa' },
    { img: 'assets/destinations/Goa/Anjuna-Beach.jpeg', name: 'Anjuna Beach', desc: 'Known for flea markets, parties, and hippie culture vibes.', location: 'Goa' },
    { img: 'assets/destinations/Goa/Dudhsagar-Falls.jpeg', name: 'Dudhsagar Falls', desc: 'Majestic multi-tier waterfall surrounded by lush forest.', location: 'Goa' },
    { img: 'assets/destinations/Goa/Sinquerim-Beach.jpeg', name: 'Sinquerim Beach', desc: 'Clean beach near Fort Aguada with water sports options.', location: 'Goa' },
    { img: 'assets/destinations/Thailand/Phuket.jpeg', name: 'Phuket', desc: 'Popular island destination with beaches and nightlife.', location: 'Thailand' },
    { img: 'assets/destinations/Thailand/Chiang-Rai.jpeg', name: 'Chiang Rai', desc: 'Famous for the White Temple and scenic landscapes.', location: 'Thailand' },
    { img: 'assets/destinations/Thailand/Tiger-Cave-Temple.jpeg', name: 'Tiger Cave Temple', desc: 'Famous temple with panoramic views after a climb.', location: 'Thailand' },
    { img: 'assets/destinations/Indonesia/Bali.jpeg', name: 'Bali', desc: 'Most popular island known for beaches, temples, and nightlife.', location: 'Indonesia' },
    { img: 'assets/destinations/Indonesia/Lombok.jpeg', name: 'Lombok', desc: 'Beautiful island known for pristine beaches, Mount Rinjani, and relaxed island vibes.', location: 'Indonesia' },
    { img: 'assets/destinations/Malaysia/Petronas-Twin-Towers.jpeg', name: 'Petronas Twin Towers', desc: 'Iconic twin towers and symbol of Malaysia.', location: 'Malaysia' },
    { img: 'assets/destinations/Malaysia/Batu-Caves.jpeg', name: 'Batu Caves', desc: 'Famous limestone caves with a giant Lord Murugan statue.', location: 'Malaysia' },
    { img: 'assets/destinations/Singapore/Marina-Bay-Sands.jpeg', name: 'Marina Bay Sands', desc: 'Iconic luxury hotel with infinity pool and skyline views.', location: 'Singapore' },
    { img: 'assets/destinations/Singapore/Gardens-By-The-Bay.jpeg', name: 'Gardens by the Bay', desc: 'Futuristic garden with Supertree Grove and domes.', location: 'Singapore' },
    { img: 'assets/destinations/Singapore/Jewel-Changi-Airport.jpeg', name: 'Jewel Changi Airport', desc: 'Famous for indoor waterfall and shopping complex.', location: 'Singapore' },
    { img: 'assets/destinations/Vietnam/Hanoi.jpeg', name: 'Hanoi', desc: 'Capital city known for old quarter, lakes, and culture.', location: 'Vietnam' },
    { img: 'assets/destinations/Vietnam/Golden-Bridge.jpeg', name: 'Golden Bridge (Ba Na Hills)', desc: 'Famous bridge held by giant stone hands.', location: 'Vietnam' },
    { img: 'assets/destinations/Philippines/Palawan.jpeg', name: 'Palawan (El Nido)', desc: 'Famous for lagoons, limestone cliffs, and island hopping.', location: 'Philippines' },
    { img: 'assets/destinations/Laos/Vang-Vieng.jpeg', name: 'Vang Vieng', desc: 'Adventure town known for caves, lagoons, and river activities.', location: 'Laos' },
    { img: 'assets/destinations/Maldives/Banana-Reef.jpeg', name: 'Banana Reef', desc: 'Famous diving spot with rich coral and marine life.', location: 'Maldives' },
    { img: 'assets/destinations/Maldives/Veligandu-Island.jpg', name: 'Veligandu Island', desc: 'Romantic island known for crystal-clear lagoons.', location: 'Maldives' },
    { img: 'assets/destinations/Mauritius/Le-Morne-Brabant.jpeg', name: 'Le Morne Brabant', desc: 'UNESCO-listed mountain with scenic views and history.', location: 'Mauritius' },
    { img: 'assets/destinations/Mauritius/Chamarel-Seven-Colored-Earth.jpeg', name: 'Chamarel Seven Colored Earth', desc: 'Unique sand dunes with natural color variations.', location: 'Mauritius' },
    { img: 'assets/destinations/Seychelles/Victoria.jpeg', name: 'Victoria', desc: 'Small capital city known for markets and culture.', location: 'Seychelles' },
    { img: 'assets/destinations/Seychelles/La-Digue-Island.jpeg', name: 'La Digue Island', desc: 'Laid-back island known for scenic beaches and cycling.', location: 'Seychelles' },
    { img: 'assets/destinations/Sri-Lanka/Colombo.jpeg', name: 'Colombo', desc: 'Capital city with markets, culture, and coastal vibes.', location: 'Sri Lanka' },
    { img: 'assets/destinations/Sri-Lanka/Sigiriya.jpeg', name: 'Sigiriya (Lion Rock)', desc: 'Ancient rock fortress and UNESCO heritage site.', location: 'Sri Lanka' },
    { img: 'assets/destinations/Sri-Lanka/Ella.jpeg', name: 'Ella', desc: 'Scenic hill town with tea plantations and viewpoints.', location: 'Sri Lanka' },
    { img: 'assets/destinations/Dubai/Burj-Khalifa.jpeg', name: 'Burj Khalifa', desc: 'World’s tallest building with panoramic city views.', location: 'Dubai' },
    { img: 'assets/destinations/Dubai/Burj-Al-Arab.jpeg', name: 'Burj Al Arab', desc: 'Iconic luxury hotel shaped like a sail.', location: 'Dubai' },
    { img: 'assets/destinations/Dubai/Palm-Jumeirah.jpeg', name: 'Palm Jumeirah', desc: 'Famous man-made island with luxury resorts.', location: 'Dubai' },
    { img: 'assets/destinations/Abu-Dhabi/Louvre-Abu-Dhabi.jpeg', name: 'Louvre Abu Dhabi', desc: 'Famous museum showcasing global art and architecture.', location: 'Abu Dhabi' },
    { img: 'assets/destinations/Abu-Dhabi/Ferrari-World.jpeg', name: 'Ferrari World', desc: 'Theme park known for the world’s fastest roller coaster.', location: 'Abu Dhabi' },
    { img: 'assets/destinations/Abu-Dhabi/Warner-Bros.jpeg', name: 'Warner Bros. World Abu Dhabi', desc: 'Indoor theme park with movie-themed rides.', location: 'Abu Dhabi' },
    { img: 'assets/destinations/Abu-Dhabi/Desert-Safari.jpeg', name: 'Desert Safari (Abu Dhabi Desert)', desc: 'Experience dune bashing, camel rides, and desert camps.', location: 'Abu Dhabi' },
    { img: 'assets/destinations/Baku/Flame-Towers.jpeg', name: 'Flame Towers', desc: 'Iconic skyscrapers symbolizing modern Baku skyline.', location: 'Baku' },
    { img: 'assets/destinations/Baku/Heydar-Aliyev-Center.jpeg', name: 'Heydar Aliyev Center', desc: 'Futuristic architectural landmark and cultural center.', location: 'Baku' },
    { img: 'assets/destinations/Georgia/Tbilisi.jpeg', name: 'Tbilisi', desc: 'Capital city known for old town, architecture, and culture.', location: 'Georgia' },
    { img: 'assets/destinations/Georgia/Gudauri.jpeg', name: 'Gudauri', desc: 'Popular ski resort and mountain destination.', location: 'Georgia' },
    { img: 'assets/destinations/Kazakhstan/Kolsai-Lake.jpeg', name: 'Kolsai Lakes', desc: 'Series of beautiful alpine lakes surrounded by forests.', location: 'Kazakhstan' },
    { img: 'assets/destinations/Kazakhstan/Shymbulak-Ski-Resort.jpeg', name: 'Shymbulak Ski Resort', desc: 'Popular mountain resort for skiing and views.', location: 'Kazakhstan' },
    { img: 'assets/destinations/Kazakhstan/Turkestan.jpeg', name: 'Turkestan', desc: 'Historic city with famous mausoleum and heritage sites.', location: 'Kazakhstan' },
    { img: 'assets/destinations/Uzbekistan/Samarkand.jpeg', name: 'Samarkand', desc: 'Iconic Silk Road city known for Registan Square and blue domes.', location: 'Uzbekistan' },
    { img: 'assets/destinations/Uzbekistan/Bukhara.jpeg', name: 'Bukhara', desc: 'Ancient city with well-preserved mosques and madrasas.', location: 'Uzbekistan' },
    { img: 'assets/destinations/Uzbekistan/Registan-Square.jpeg', name: 'Registan Square', desc: 'Famous architectural complex and cultural heart of Samarkand.', location: 'Uzbekistan' },
    { img: 'assets/destinations/Uzbekistan/Chorsu-Bazaar.jpeg', name: 'Chorsu Bazaar', desc: 'Traditional market offering local culture and food.', location: 'Uzbekistan' },
    { img: 'assets/destinations/Macau/Ruins-of-St.Pauls.jpeg', name: 'Ruins of St. Paul’s', desc: 'Iconic historic church façade and UNESCO heritage site.', location: 'Macau' },
    { img: 'assets/destinations/Macau/Macau-Tower.jpeg', name: 'Macau Tower', desc: 'Observation tower known for views and adventure activities.', location: 'Macau' },
    { img: 'assets/destinations/Macau/A-Ma-Temple.jpeg', name: 'A-Ma Temple', desc: 'One of the oldest temples dedicated to the sea goddess.', location: 'Macau' },
    { img: 'assets/destinations/Macau/Grand-Lisboa-Casino.jpeg', name: 'Grand Lisboa Casino', desc: 'Iconic casino and landmark building in Macau skyline.', location: 'Macau' }


  ]




}
