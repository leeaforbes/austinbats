import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-court-measurements',
  imports: [RouterLink, CommonModule],
  templateUrl: './court-measurements.html',
  styleUrl: './court-measurements.css',
})
export class CourtMeasurements {
  useMetric = true;

  toggleUnits(): void {
    this.useMetric = !this.useMetric;
  }

  get outerBoundaryLabel(): string {
    return this.useMetric ? 'r = 8.5 m' : 'r = 27.9 ft';
  }

  get serviceLineLabel(): string {
    return this.useMetric ? 'r = 2.6 m' : 'r = 8.5 ft';
  }

  get nhzLabel(): string {
    return this.useMetric ? 'NHZ r = 100 cm' : 'NHZ r = 3.28 ft';
  }
}
