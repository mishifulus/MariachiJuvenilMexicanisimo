import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KnowusComponent } from './components/knowus/knowus.component';
import { GaleryComponent } from './components/galery/galery.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conocenos', component: KnowusComponent },
  { path: 'galeria', component: GaleryComponent },
  { path: 'contacto', component: ContactComponent },
  {path: '**', redirectTo: ''}
];
