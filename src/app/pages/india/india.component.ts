import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-india',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './india.component.html',
  styleUrl: './india.component.css'
})
export class IndiaComponent {
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
      id: 'ladakh',
      title: 'Leh Ladakh', location: 'India', rating: '4.7', days: 7, price: 355, img: '/assets/destinations/Ladakh.avif',
      highlights: [
        'Breathtaking mountain landscapes',
        'High-altitude adventure rides',
        'Peaceful monasteries & culture'
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
    }
  ];


  viewDetails(id: string) {
    this.router.navigate(['/destination', id]);
  }

}
