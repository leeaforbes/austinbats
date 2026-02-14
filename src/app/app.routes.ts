import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Schedule } from './schedule/schedule';
import { Media } from './media/media';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'schedule', component: Schedule },
    { path: 'media', component: Media },
];
