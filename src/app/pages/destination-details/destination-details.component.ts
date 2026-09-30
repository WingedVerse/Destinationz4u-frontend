import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { DomSanitizer, Meta, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContactComponent } from '../../shared/contact/contact.component';
import { AndamanNicobar } from '../../shared/models/andaman-nicobar.model';
import { Goa } from '../../shared/models/goa.model';
import { Lakshadweep } from '../../shared/models/lakshadweep.model';
import { Ladakh } from '../../shared/models/Ladakh.model';
import { Thailand } from '../../shared/models/thailand.model';
import { Indonesia } from '../../shared/models/indonesia.model';
import { Malaysia } from '../../shared/models/malaysia.model';
import { Singapore } from '../../shared/models/singapore.model';
import { Vietnam } from '../../shared/models/vietnam.model';
import { Laos } from '../../shared/models/laos.model';
import { Philippines } from '../../shared/models/philippines.model';
import { Maldives } from '../../shared/models/maldives.model';
import { Mauritius } from '../../shared/models/mauritius.model';
import { Seychelles } from '../../shared/models/seychelles.model';
import { SriLanka } from '../../shared/models/srilanka.model';
import { Dubai } from '../../shared/models/dubai.model';
import { AbuDhabi } from '../../shared/models/abu-dhabi.model';
import { Baku } from '../../shared/models/baku.model';
import { Georgia } from '../../shared/models/georgia.model';
import { Kazakhstan } from '../../shared/models/kazakhstan.model';
import { Uzbekistan } from '../../shared/models/uzbekistan.model';
import { Macau } from '../../shared/models/macau.model';

@Component({
  selector: 'app-destination-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactComponent],
  templateUrl: './destination-details.component.html',
  styleUrl: './destination-details.component.css'
})
export class DestinationDetailsComponent implements AfterViewInit {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private isBrowser = false;
  activeIndex = 0;
  destination: any;
  safeMapUrl!: SafeResourceUrl;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private route: ActivatedRoute, private meta: Meta, private title: Title, private zone: NgZone, private sanitizer: DomSanitizer) {
    this.isBrowser = isPlatformBrowser(platformId);
  }


  async ngAfterViewInit(): Promise<void> {
    if (!this.isBrowser) return;

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

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.destination = this.destinations.find(d => d.id === id);

      if (!this.destination) {
        console.error('Destination not found');
        return;
      }

      // 🔥 update map every time route changes
      this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.destination.info.mapUrl
      );
    });
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




  // You can later move this to service/API
  destinations = [
    {
      id: 'andaman',
      info: new AndamanNicobar()
    },
    {
      id: 'lakshadweep',
      info: new Lakshadweep()
    },
    {
      id: 'ladakh',
      info: new Ladakh()
    },
    {
      id: 'goa',
      info: new Goa()
    },


    {
      id: 'thailand',
      info: new Thailand()
    },
    {
      id: 'indonesia',
      info: new Indonesia()
    },
    {
      id: 'malaysia',
      info: new Malaysia()
    },
    {
      id: 'singapore',
      info: new Singapore()
    },
    {
      id: 'vietnam',
      info: new Vietnam()
    },
    {
      id: 'philippines',
      info: new Philippines()
    },
    {
      id: 'laos',
      info: new Laos()
    },




    {
      id: 'maldives',
      info: new Maldives()
    },
    {
      id: 'mauritius',
      info: new Mauritius()
    },
    {
      id: 'seychelles',
      info: new Seychelles()
    },
    {
      id: 'srilanka',
      info: new SriLanka()
    },






    {
      id: 'dubai',
      info: new Dubai()
    },
    {
      id: 'abu-dhabi',
      info: new AbuDhabi()
    },
    {
      id: 'baku',
      info: new Baku()
    },
    {
      id: 'georgia',
      info: new Georgia()
    },
    {
      id: 'kazakhstan',
      info: new Kazakhstan()
    },
    {
      id: 'uzbekistan',
      info: new Uzbekistan()
    },
    {
      id: 'macau',
      info: new Macau()
    },
  ];


}
