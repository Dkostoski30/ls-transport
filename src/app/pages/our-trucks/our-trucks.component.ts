import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterLink } from '@angular/router';

interface Truck {
  name: string;
  model: string;
  engine: string;
  capacity: string;
  year: number;
  carrying_capacity: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-our-trucks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './our-trucks.component.html',
  styleUrls: ['./our-trucks.component.css']
})
export class OurTrucksComponent {
  trucks: Truck[] = [
    {
      name: 'Renault Master',
      model: 'Master 3',
      engine: '2.3L Inline-4 Diesel',
      capacity: '<3.5 Tons',
      carrying_capacity: '1.1 Tons',
      year: 2014,
      description:
        'The Renault Master 3 offers versatile cargo space and efficient performance, great for urban deliveries and medium-distance transport.',
      image: 'staro_kombe.jpg',
    },
    {
      name: 'Renault Master',
      model: 'Master 3',
      engine: '2.3L Inline-4 Diesel',
      capacity: '<3.5 Tons',
      carrying_capacity: '1.1 Tons',
      year: 2019,
      description:
        'The Renault Master 3 is compact yet powerful, suited for flexible logistics and easy maneuverability in city environments.',
      image: 'novo_kombe.jpg',
    },
  ];
}
