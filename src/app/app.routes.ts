import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { KnowusComponent } from './features/knowus/knowus.component';
import { GaleryComponent } from './features/galery/galery.component';
import { ContactComponent } from './features/contact/contact.component';
import { RepertorioComponent } from './features/repertorio/repertorio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conocenos', component: KnowusComponent },
  { path: 'repertorio', component: RepertorioComponent },
  { path: 'galeria', component: GaleryComponent },
  { path: 'contacto', component: ContactComponent },
  {path: '**', redirectTo: ''}
];
