import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { CONTACT_INFO } from '../constants/contact-info';
@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contactInfo = CONTACT_INFO;
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
