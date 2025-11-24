import { Component } from '@angular/core';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { MosaicComponent } from '../../components/mosaic/mosaic.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarruselComponent, MosaicComponent, ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
