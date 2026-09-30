import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beach-tours',
  imports: [CommonModule],
  templateUrl: './beach-tours.component.html',
  styleUrl: './beach-tours.component.css'
})
export class BeachToursComponent {
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
      id: 'lakshadweep',
      title: 'Lakshadweep', location: 'India', rating: '4.8', days: 10, price: 570, img: 'assets/destinations/Lakshadweep.jpeg',
      highlights: [
        'Untouched coral islands',
        'Exclusive luxury beach stays',
        'Perfect for snorkeling & kayaking'
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

  ];



  viewDetails(id: string) {
    this.router.navigate(['/destination', id]);
  }
}
