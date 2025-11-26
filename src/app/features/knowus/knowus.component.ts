import { Component } from '@angular/core';
import { InfomosaicComponent } from '../../components/infomosaic/infomosaic.component';
import { MembersComponent } from '../../components/members/members.component';

@Component({
  selector: 'app-knowus',
  standalone: true,
  imports: [InfomosaicComponent, MembersComponent],
  templateUrl: './knowus.component.html',
  styleUrl: './knowus.component.css'
})
export class KnowusComponent {

}
