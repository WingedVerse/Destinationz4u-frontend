import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mountain-tours',
  imports: [CommonModule],
  templateUrl: './mountain-tours.component.html',
  styleUrl: './mountain-tours.component.css'
})
export class MountainToursComponent {
  constructor(private router: Router) { }

  destinations = [
    {
      id: 'ladakh',
      title: 'Leh Ladakh', location: 'India', rating: '4.7', days: 7, price: 355, img: '/assets/destinations/Ladakh.avif',
      highlights: [
        'Breathtaking mountain landscapes',
        'High-altitude adventure rides',
        'Peaceful monasteries & culture'
      ]
    },
    {
      id: 'indonesia',
      title: 'Indonesia', location: 'Asia', rating: '4.8', days: 10, price: 570, img: 'assets/destinations/BALI.jpeg',
      highlights: [
        'Luxury villas & beach resorts',
        'Lush jungles & waterfalls',
        'Perfect for honeymoon & relaxation'
      ]
    },
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
      id: 'laos',
      title: 'Laos', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Laos.jpeg',
      highlights: [
        'Peaceful & less crowded destination',
        'Beautiful waterfalls & nature',
        'Spiritual temples & heritage'
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
      id: 'georgia',
      title: 'Georgia', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Georgia.jpeg',
      highlights: [
        'Snowy mountains & landscapes',
        'Historic towns & wine culture',
        'Affordable European vibe'
      ]
    },
    {
      id: 'kazakhstan',
      title: 'Kazakhstan', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Kazakhastan.jpeg',
      highlights: [
        'Vast steppes & natural beauty',
        'Modern cities like Almaty',
        'Adventure & outdoor activities'
      ]
    },
    {
      id: 'uzbekistan',
      title: 'Uzbekistan', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Uzbekistan.jpeg',
      highlights: [
        'Silk Road heritage cities',
        'Stunning Islamic architecture',
        'Rich culture & history'
      ]
    }
  ]


  viewDetails(id: string) {
    this.router.navigate(['/destination', id]);
  }
}
