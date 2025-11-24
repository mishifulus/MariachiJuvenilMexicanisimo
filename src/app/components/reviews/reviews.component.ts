import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {

  currentIndex = 0;
  reviews = [
    {
      name: 'María López',
      event: 'Boda en León',
      text: 'Excelente presentación, muy puntuales y con gran talento. Todos quedaron encantados.',
    },
    {
      name: 'Jorge Ramírez',
      event: 'Cumpleaños familiar',
      text: 'Le dieron un toque muy especial a nuestra fiesta. ¡Los volvería a contratar sin dudarlo!',
    },
    {
      name: 'Ana García',
      event: 'Evento corporativo',
      text: 'Profesionales, con excelente repertorio y presencia impecable.',
    },
  ];

  ngOnInit() {
    setInterval(() => this.next(), 5000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
