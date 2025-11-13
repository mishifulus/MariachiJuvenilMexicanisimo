import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements OnInit {
  contactWhatsApp() {
    const phoneNumber = '5214771513700';
    const message = '¡Hola! Me interesa contratar al Mariachi Juvenil Mexicanísimo para un evento';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }

  images = [
    'assets/hero/hero1.jpeg',
    'assets/hero/hero2.jpeg',
    'assets/hero/hero3.jpg',
    'assets/hero/hero4.jpeg',
    'assets/hero/hero5.jpeg',
    'assets/hero/hero6.jpg',
  ];
  currentIndex = 0;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }
}
