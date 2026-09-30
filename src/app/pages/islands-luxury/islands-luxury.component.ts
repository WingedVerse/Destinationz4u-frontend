import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-islands-luxury',
  imports: [CommonModule],
  templateUrl: './islands-luxury.component.html',
  styleUrl: './islands-luxury.component.css'
})
export class IslandsLuxuryComponent {

  constructor(private router: Router) { }

  destinations = [
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
