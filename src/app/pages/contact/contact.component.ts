import { Component } from '@angular/core';
import { CONTACT_INFO } from '../../shared/constants/contact-info';
import {NgForOf} from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [
    NgForOf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = CONTACT_INFO;
}
