import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asia',
  imports: [CommonModule],
  templateUrl: './asia.component.html',
  styleUrl: './asia.component.css'
})
export class AsiaComponent {

  constructor(private router: Router) { }

  destinations = [
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
      id: 'singapore',
      title: 'Singapore', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Singapore.jpeg',
      highlights: [
        'Futuristic city attractions',
        'Clean & safe urban experience',
        'Luxury shopping & dining'
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
      id: 'philippines',
      title: 'Philippines', location: 'Asia', rating: '4.9', days: 15, price: 825, img: '/assets/destinations/Philippines.jpeg',
      highlights: [
        'Stunning white-sand beaches',
        'Island hopping adventures',
        'Crystal-clear blue waters'
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
    }

  ];



  viewDetails(id: string) {
    this.router.navigate(['/destination', id]);
  }
}
