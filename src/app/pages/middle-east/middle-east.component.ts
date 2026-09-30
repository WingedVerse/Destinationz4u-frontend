import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-middle-east',
  imports: [CommonModule],
  templateUrl: './middle-east.component.html',
  styleUrl: './middle-east.component.css'
})
export class MiddleEastComponent {

  constructor(private router:Router) { }
  destinations = [
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
      id: 'baku',
      title: 'Baku (Azerbaijan)', location: 'Asia', rating: '4.7', days: 7, price: 355, img: '/assets/destinations/Baku.jpeg',
      highlights: [
        'Modern skyline & old city charm',
        'Caspian Sea waterfront views',
        'Unique blend of Europe & Asia'
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

  ];


  viewDetails(id: string) {
    this.router.navigate(['/destination', id]);
  }
}
