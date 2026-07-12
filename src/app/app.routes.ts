import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Schedule } from './schedule/schedule';
import { Media } from './media/media';
import { SummerCamp } from './summer-camp/summer-camp';
import { Sponsors } from './sponsors/sponsors';
import { InteractiveIrf } from './interactive-irf/interactive-irf';
import { CourtMeasurements } from './interactive-irf/tools/court-measurements/court-measurements';
import { HinderDecisionTree } from './interactive-irf/tools/hinder-decision-tree/hinder-decision-tree';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'schedule', component: Schedule },
    { path: 'media', component: Media },
    { path: 'summer-camp', component: SummerCamp },
    { path: 'sponsors', component: Sponsors },
    { path: 'interactive-irf', component: InteractiveIrf },
    { path: 'interactive-irf/tools/court-measurements', component: CourtMeasurements },
    { path: 'interactive-irf/tools/hinder-decision-tree', component: HinderDecisionTree },
];
