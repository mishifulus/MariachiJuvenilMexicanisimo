import { Component, OnInit } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title, private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.updateMetaTags(this.router.url);
    });
  }

  updateMetaTags(url: string): void {
    if (url === '/') {
      this.title.setTitle('Mariachi Juvenil Mexicanísimo | Alegría y Tradición Mexicana');
      this.meta.updateTag({ name: 'description', content: 'El Mariachi Juvenil Mexicanísimo anima tu evento con pasión y estilo. Serenatas, bodas y celebraciones inolvidables con música mexicana.' });
    }
    else if (url.includes('/conocenos')) {
      this.title.setTitle('Conócenos | Mariachi Juvenil Mexicanísimo');
      this.meta.updateTag({ name: 'description', content: 'Cononce las cualidades que distinguen a este mariachi con más de 40 años de experiencia.' });
    }
    else if (url.includes('/repertorio')) {
      this.title.setTitle('Repertorio | Mariachi Juvenil Mexicanísimo');
      this.meta.updateTag({ name: 'description', content: 'Descubre nuestras canciones más románticas, las llegadoras y los clásicos rancheros que alegran cualquier ocasión.' });
    }
    else if (url.includes('/galeria')) {
      this.title.setTitle('Galería | Mariachi Juvenil Mexicanísimo');
      this.meta.updateTag({ name: 'description', content: 'Mira las imágenes de nuestros eventos, presentaciones y momentos especiales llenos de alegría mexicana.' });
    }
    else if (url.includes('/contacto')) {
      this.title.setTitle('Contacto | Mariachi Juvenil Mexicanísimo');
      this.meta.updateTag({ name: 'description', content: 'Contrata al Mariachi Juvenil para tu evento. Envíanos un mensaje y alegra tu celebración con la mejor música mexicana.' });
    }
    else {
      this.title.setTitle('Mariachi Juvenil Mexicanísimo | Alegría y Tradición Mexicana');
      this.meta.updateTag({ name: 'description', content: 'Mariachi Juvenil — música, tradición y alegría mexicana para tus momentos especiales.' });
    }
  }
}
