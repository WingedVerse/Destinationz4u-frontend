import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-luxury-tours',
  imports: [CommonModule],
  templateUrl: './luxury-tours.component.html',
  styleUrl: './luxury-tours.component.css'
})
export class LuxuryToursComponent {
  constructor(private router: Router) { }

  destinations = [
    {
      id: 'malaysia',
      title: 'Malaysia', location: 'Asia', rating: '4.7', days: 7, price: 355, img: '/assets/destinations/Malysia.jpeg',
      highlights: [
        'Modern cities & skyline views',
        'Diverse food & culture',
        'Island getaways like Langkawi'
      ]
    },
    {
      id: 'singapore',
      title: 'Singapore', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Singapore.jpeg',
      highlights: [
        'Futuristic city attractions',
        'Clean & safe urban experience',
        'Luxury shopping & dining'
      ]
    },
    {
      id: 'philippines',
      title: 'Philippines', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Philippines.jpeg',
      highlights: [
        'Stunning white-sand beaches',
        'Island hopping adventures',
        'Crystal-clear blue waters'
      ]
    },
    {
      id: 'maldives',
      title: 'Maldives', location: 'Asia', rating: '4.9', days: 5, price: 225, img: 'assets/destinations/Maldives.jpeg',
      highlights: [
        'Luxury overwater villas',
        'Crystal-clear lagoons',
        'Perfect honeymoon escape'
      ]
    },
    {
      id: 'mauritius',
      title: 'Mauritius', location: 'Asia', rating: '4.8', days: 10, price: 570, img: 'assets/destinations/mauritius.jpeg',
      highlights: [
        'White sand beaches & reefs',
        'Water sports & island tours',
        'Blend of cultures & cuisine'
      ]
    },
    {
      id: 'seychelles',
      title: 'Seychelles', location: 'Asia', rating: '4.7', days: 7, price: 355, img: '/assets/destinations/Seychelles.jpeg',
      highlights: [
        'Pristine untouched beaches',
        'Granite rock formations',
        'Exclusive luxury experience'
      ]
    },
    {
      id: 'srilanka',
      title: 'Sri Lanka', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Sri-Lanka.jpeg',
      highlights: [
        'Tea plantations & hills',
        'Wildlife safaris & beaches',
        'Rich heritage & temples'
      ]
    },
    {
      id: 'dubai',
      title: 'Dubai', location: 'Asia', rating: '4.9', days: 5, price: 225, img: 'assets/destinations/DUBAI.jpeg',
      highlights: [
        'Luxury shopping & skyscrapers',
        'Desert safari & dune adventures',
        'World-class nightlife & dining'
      ]
    },
    {
      id: 'abu-dhabi',
      title: 'Abu Dhabi', location: 'Asia', rating: '4.8', days: 10, price: 570, img: 'assets/destinations/Abu-Dhabi.jpeg',
      highlights: [
        'Grand mosques & architecture',
        'Cultural landmarks & museums',
        'Premium island resorts'
      ]
    },
    {
      id: 'macau',
      title: 'Macau', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Macau.jpeg',
      highlights: [
        'Luxury casinos & entertainment',
        'Portuguese colonial heritage',
        'Vibrant nightlife & shows'
      ]
    },
  ]


  viewDetails(id: string) {
    this.router.navigate(['/destination', id]);
  }
}
