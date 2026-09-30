import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Destinationz4u | About');

    this.meta.addTags([
      { name: 'description', content: 'Explore India, Bali, Dubai, Thailand, Srilanka, Maldives, Malysia, Singapore, Andaman nicabar & more with customized travel packages at best prices.' },
      { name: 'keywords', content: 'travel agency, tour packages, India tours, Bali trips, Dubai travel, international trips, Thailands tour packages, Indonesia tour packages, Srilanka tour packages, Maldives tour packages, Mauritius tour packages, Dubai n abudhabi tour packages, Malaysia tour packages, Singapore tour packages, Andaman Nicobar tour packages, Lakshwadeep tour packages, Ladakh tour packages, Seychelles tour packages, Baku tour packages, Azerbaijan tour packages, Kazakhstan tour packages,' },
      { name: 'author', content: 'Destinationz4u' }
    ]);
  }
}
