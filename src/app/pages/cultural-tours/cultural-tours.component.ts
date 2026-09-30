import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cultural-tours',
  imports: [CommonModule],
  templateUrl: './cultural-tours.component.html',
  styleUrl: './cultural-tours.component.css'
})
export class CulturalToursComponent {

  constructor(private router: Router) { }

  destinations = [
    {
      id: 'andaman',
      title: 'Andaman & Nicobar', location: 'India', rating: '4.9', days: 5, price: 225, img: 'assets/destinations/Andama-nicobar.jpeg',
      highlights: [
        'Crystal-clear turquoise beaches',
        'Thrilling water sports & scuba diving',
        'Serene island vibes & sunsets'
      ]
    },
    {
      id: 'goa',
      title: 'Goa', location: 'India', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Goa.jpeg',
      highlights: [
        'Vibrant nightlife & beach parties',
        'Golden beaches & water sports',
        'Portuguese heritage & cafes'
      ]
    },
    {
      id: 'thailand',
      title: 'Thailand', location: 'Asia', rating: '4.9', days: 5, price: 225, img: 'assets/destinations/Thailand.jpeg',
      highlights: [
        'Vibrant nightlife & street markets',
        'Beautiful beaches & islands',
        'Rich culture & temples'
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
      id: 'vietnam',
      title: 'Vietnam', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Vietnam.jpeg',
      highlights: [
        'Scenic landscapes & Halong Bay',
        'Affordable travel experience',
        'Rich history & culture'
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
