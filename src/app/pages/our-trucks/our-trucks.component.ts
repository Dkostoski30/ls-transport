import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
interface Truck {
  name: string;
  model: string;
  engine: string;
  capacity: string;
  year: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-our-trucks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './our-trucks.component.html',
  styleUrl: './our-trucks.component.css'
})

export class OurTrucksComponent {
  trucks: Truck[] = [
    {
      name: 'Volvo FH16',
      model: 'FH16 750',
      engine: '16.1L Inline-6 Diesel',
      capacity: '44 Tons',
      year: 2020,
      description:
        'The Volvo FH16 is known for its power and durability, perfect for heavy international transport. It offers advanced safety features and superior driver comfort.',
      image: 'assets/trucks/volvo-fh16.jpg',
    },
    {
      name: 'Mercedes-Benz Actros',
      model: 'Actros 1851',
      engine: '12.8L Inline-6 Diesel',
      capacity: '40 Tons',
      year: 2019,
      description:
        'The Mercedes-Benz Actros combines efficiency with innovation. Ideal for forwarding and logistics, it ensures reliable performance on long hauls.',
      image: 'assets/trucks/mercedes-actros.jpg',
    },
  ];
}
