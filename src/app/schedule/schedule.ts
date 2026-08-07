import { Component } from '@angular/core';
import eventsData from './schedule-events.json';

interface ScheduleEvent {
  host: string;
  event: string;
  city: string;
  date: string;
  endDate?: string;
  link: string;
  displayDate: string;
}

const today = new Date();
today.setHours(0, 0, 0, 0);

function isCompleted(e: { date: string; endDate?: string }): boolean {
  return new Date(e.endDate ?? e.date) < today;
}

function formatDate(date: string, endDate?: string): string {
  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    });

  if (!endDate) return fmt(date);

  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', timeZone: 'UTC' };
  const startStr = new Date(date).toLocaleDateString('en-US', opts);
  const endStr = new Date(endDate).toLocaleDateString('en-US', { ...opts, year: 'numeric' });
  return `${startStr} – ${endStr}`;
}

const enriched: ScheduleEvent[] = eventsData.map((e) => ({
  ...e,
  displayDate: formatDate(e.date, e.endDate),
}));

@Component({
  selector: 'app-schedule',
  imports: [],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css',
})
export class Schedule {
  readonly upcomingEvents: ScheduleEvent[] = enriched.filter((e) => !isCompleted(e));
  readonly completedEvents: ScheduleEvent[] = enriched.filter((e) => isCompleted(e));
}
