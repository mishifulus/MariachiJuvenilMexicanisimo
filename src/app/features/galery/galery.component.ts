import { Component } from '@angular/core';
import { PhotosComponent } from '../../components/photos/photos.component';
import { VideosComponent } from "../../components/videos/videos.component";

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [PhotosComponent, VideosComponent],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent {

}
