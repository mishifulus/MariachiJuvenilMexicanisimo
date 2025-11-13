import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  facebookLink = 'https://www.facebook.com/profile.php?id=61570002355928';
  instagramLink = 'https://www.instagram.com/juvenil_mexicanisimo';
  tiktokLink = 'https://www.tiktok.com/@juvenil_mexicanisimo';
  youtubeLink = 'https://www.youtube.com/@mariachijuvenilmexicanisimo';
}
